import mongoose from "mongoose";
import { Doctor, DoctorModel } from "../models/doctorModel";
import type { SortOrder } from "mongoose";
/**
 * Params accepted for discovery (all optional)
 * - q: text search
 * - primarySpecialization
 * - specialization (comma-separated string)
 * - practiceType
 * - consultationMode
 * - minFee, maxFee
 * - verificationStatus
 * - city, state, country
 * - sort: fee_asc | fee_desc | newest | relevance
 * - page, limit
 */

export interface DiscoveryParams {
  search?: string;
  primarySpecialization?: string;
  specialization?: string;
  consultationMode?: "physical" | "virtual";
  practiceType?: "hospital" | "private" | "both";
  minFee?: number;
  maxFee?: number;
  verificationStatus?: "pending" | "verified" | "rejected";
  city?: string;
  state?: string;
  country?: string;
  sort?: "fee_asc" | "fee_desc" | "newest" | "relevance";
  page?: number;
  limit?: number;
}
interface DoctorDiscoveryResult {
  id: string;
  primarySpecialization: string;
  yearsOfExperience?: number;
  consultationFee?: number;
  verificationStatus: "pending" | "verified" | "rejected";
  practiceType: "hospital" | "private" | "both";
  consultationModes: ("physical" | "virtual")[];
  location?: {
    country?: string;
    state?: string;
  };
  user: {
    id: string;
    fullName: string;
    profileImage?: string;
    gender?: "male" | "female";
  };
  hospital: {
    id: string;
    name: string;
  };
}
interface DoctorDetailsResult {
  doctor: {
    id: string;
    primarySpecialization: string | undefined;
    specializations: string[];
    yearsOfExperience?: number;
    consultationFee?: number;
    verificationStatus: "pending" | "verified" | "rejected";
    practiceType: "hospital" | "private" | "both";
    consultationModes: ("physical" | "virtual")[];
    location?: {
      street?: string;
      city?: string;
      state?: string;
      country?: string;
    };
    biography?: string;
    qualifications: string[];
    user: {
      id: string;
      fullName: string;
      profileImage?: string;
      gender?: "male" | "female";
      phoneNumber?: string;
      email?: string;
    };
    hospital: {
      id: string;
      name: string;
      address?: {
        street?: string;
        city?: string;
        state?: string;
        country?: string;
      };
      isVerified: boolean;
    };
  }
}

// Helper service

export const escapeRegExp = (text: string) =>
  text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters for regex

export const buildSearch = (search?: string) => {
  if (!search) return null;

  const escapedSearch = new RegExp(escapeRegExp(search), "i"); // Case-insensitive search
  return {
    $or: [
      { biography: { $regex: escapedSearch } },
      { qualifications: { $in: [escapedSearch] } },
      { licenseNumber: { $regex: escapedSearch } },
      { specialization: { $regex: escapedSearch } },
      { name: { $regex: escapedSearch } },
    ],
  };
};

export const buildFilters = (
  params: DiscoveryParams,
): Record<string, unknown> => {
  const {
    primarySpecialization,
    specialization,
    practiceType,
    consultationMode,
    minFee,
    maxFee,
    verificationStatus,
    city,
    state,
    country,
  } = params;

  const filter: Record<string, unknown> = {};

  if (primarySpecialization)
    filter.primarySpecialization = primarySpecialization;

  if (specialization) {
    const list = String(specialization)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (list.length) {
      filter.$or = [
        { primarySpecialization: { $in: list } },
        { specializations: { $in: list } },
      ];
    }
  }
  if (practiceType) filter.practiceType = practiceType;
  if (consultationMode) filter.consultationModes = consultationMode;
  if (verificationStatus) filter.verificationStatus = verificationStatus;

  if (minFee !== undefined || maxFee !== undefined) {
    filter.consultationFee = {} as Record<string, number>;
    if (minFee !== undefined)
      (filter.consultationFee as Record<string, number>).$gte = Number(minFee);
    if (maxFee !== undefined)
      (filter.consultationFee as Record<string, number>).$lte = Number(maxFee);
  }

  if (city) filter["practiceLocation.city"] = city;
  if (state) filter["practiceLocation.state"] = state;
  if (country) filter["practiceLocation.country"] = country;

  return filter;
};

export const buildSort = (
  sort?: DiscoveryParams["sort"],
): Record<string, SortOrder> => {
  switch (sort) {
    case "fee_asc":
      return { consultationFee: 1 };
    case "fee_desc":
      return { consultationFee: -1 };
    case "newest":
      return { createdAt: -1 };
    case "relevance":
      return { createdAt: -1 };
    default:
      return { createdAt: -1 };
  }
};

export const buildPagination = async (
  page?: number | string,
  limit?: number | string,
) => {
  const p: number = Math.max(1, Number(page ?? 1));
  const l: number = Math.min(100, Math.max(1, Number(limit ?? 10)));
  const skip: number = (p - 1) * l;
  const totalItems: number = await DoctorModel.countDocuments().exec();
  const totalPages: number = Math.ceil(totalItems / l);
  const hasNextPage: boolean = p < totalPages;
  const hasPrevPage: boolean = p > 1;

  return {
    page: p,
    limit: l,
    skip,
    totalItems,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };
};

// The main Service function to discover doctors based on the provided parameters

export const discoverDoctors = async (
  params: DiscoveryParams,
): Promise<{ doctors: DoctorDiscoveryResult[]; pagination: {} }> => {
  const { search, sort, page, limit, ...filters } = params;
  const searchQuery = buildSearch(search);
  const filterQuery = buildFilters(filters);
  const sortQuery = buildSort(sort);
  const pagination = await buildPagination(page, limit);
  const finalQuery = searchQuery
    ? { $and: [searchQuery, filterQuery] }
    : filterQuery;

  const doctors = await DoctorModel.find(finalQuery)
    .populate("userId", "firstName lastName profileImage, gender")
    .populate("hospitalId", "name ")
    .sort(sortQuery)
    .skip(pagination.skip)
    .limit(pagination.limit)
    .lean()
    .exec();

  const results: DoctorDiscoveryResult[] = doctors.map((doc: any) => {
    const specialistSinceYear = doc.specialistSince
      ? new Date(doc.specialistSince).getFullYear()
      : undefined;
    const currentYear = new Date().getFullYear();
    const years = specialistSinceYear ? currentYear - specialistSinceYear : 0;

    return {
      id: String(doc._id),
      primarySpecialization: doc.primarySpecialization,
      yearsOfExperience: years,
      consultationFee: doc.consultationFee,
      verificationStatus: doc.verificationStatus,
      practiceType: doc.practiceType,
      consultationModes: doc.consultationModes,
      location: {
        country: doc.practiceLocation?.country,
        state: doc.practiceLocation?.state,
      },
      user: {
        id: String(doc.userId?._id ?? doc.userId),
        fullName:
          `${doc.userId?.firstName ?? ""} ${doc.userId?.lastName ?? ""}`.trim(),
        profileImage: doc.userId?.profileImage,
        gender: doc.userId?.gender,
      },
      hospital: {
        id: String(doc.hospitalId?._id ?? doc.hospitalId),
        name: doc.hospitalId?.name,
      },
    } as DoctorDiscoveryResult;
  });

  return {
    doctors: results,
    pagination,
  };
};

// Doctor details service function
export const getDoctorDetails = async (
  doctorId: string,
): Promise<DoctorDetailsResult | null> => {
  if (!mongoose.Types.ObjectId.isValid(doctorId)) {
    return null;
  }

  const doctor = await DoctorModel.findById(doctorId)
    .populate(
      "userId",
      "firstName lastName profileImage gender phoneNumber email",
    )
    .populate("hospitalId", "name address isVerified")
    .lean()
    .exec();
  if (!doctor) return null;

  const user = doctor.userId as any;
  const hospital = doctor.hospitalId as any;

  const specialistSinceYear = doctor.specialistSince
    ? new Date(doctor.specialistSince).getFullYear()
    : undefined;
  const currentYear = new Date().getFullYear();
  const years = specialistSinceYear ? currentYear - specialistSinceYear : 0;

  const result: DoctorDetailsResult = {
    id: String(doctor._id),
    primarySpecialization: doctor.primarySpecialization ?? undefined,
    specializations: doctor.specializations ?? [],
    yearsOfExperience: years,
    consultationFee: doctor.consultationFee ?? undefined,
    verificationStatus: doctor.verificationStatus,
    practiceType: doctor.practiceType,
    consultationModes: doctor.consultationModes ?? [],
    location: {
      street: doctor.practiceLocation?.street ?? undefined,
      city: doctor.practiceLocation?.city ?? undefined,
      state: doctor.practiceLocation?.state ?? undefined,
      country: doctor.practiceLocation?.country ?? undefined,
    },
    biography: doctor.biography ?? undefined,
    qualifications: doctor.qualifications ?? [],
    user: {
      id: String(doctor.userId?._id ?? doctor.userId),
      fullName:
        `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() ?? undefined,
      profileImage: user?.profileImage ?? undefined,
      gender: user?.gender ?? undefined,
      phoneNumber: user?.phoneNumber ?? undefined,
      email: user?.email ?? undefined,
    },
    hospital: {
      id: String(doctor.hospitalId?._id ?? doctor.hospitalId),
      name: hospital?.name ?? "",
      address: {
        street: hospital?.address?.street,
        city: hospital?.address?.city,
        state: hospital?.address?.state,
        country: hospital?.address?.country,
      },
      isVerified: hospital?.isVerified ?? false,
    },
  };
  return { doctor: result };
};
