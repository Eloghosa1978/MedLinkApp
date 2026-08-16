import mongoose from "mongoose";
import { Doctor, DoctorModel } from "../models/doctorModel";
import type { SortOrder } from "mongoose";
import {
  DoctorDetailsResult,
  DoctorDiscoveryResult,
  Pagination,
  DiscoveryParams,
} from "../types/doctors.types";
import { UserModel } from "../models/authModel";
/**
 * Params accepted for discovery (all optional)
 * - q: text search
 * - primarySpecialization
 * - Primaryspecialization (comma-separated string)
 * - practiceType
 * - consultationMode
 * - minFee, maxFee
 * - city, state, country
 * - sort: fee_asc | fee_desc | newest
 * - p, l
 */

// Helper service

export const escapeRegExp = (text: string) =>
  text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters for regex

export const buildSearch = async (search?: string) => {
  if (!search?.trim()) return null;

  const escapedSearch = new RegExp(escapeRegExp(search.trim()), "i"); // Case-insensitive search

  // Find users whose name matches the search term

  const matchingUsers = await UserModel.find({
    $or: [
      { firstName: { $regex: escapedSearch } },
      { lastName: { $regex: escapedSearch } },
    ],
  })
    .select("_id")
    .lean()
    .exec();

  const userIds = matchingUsers.map((user) => user._id);
  return {
    $or: [
      { qualifications: { $in: [escapedSearch] } },

      { primarySpecialization: { $regex: escapedSearch } },
      { specializations: { $regex: escapedSearch } },
      // User name matches,
      { userId: { $in: userIds } },
    ],
  };
};

export const buildFilters = (
  params: DiscoveryParams,
): Record<string, unknown> => {
  const {
    primarySpecialization,
    specializations,
    practiceType,
    consultationMode,
    minFee,
    maxFee,
    city,
    state,
    country,
  } = params;

  const filter: Record<string, unknown> = {};

  if (primarySpecialization)
    filter.primarySpecialization = primarySpecialization;

  if (specializations) {
    const list = String(specializations)
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
    default:
      return { createdAt: -1 };
  }
};

export const buildPagination = (
  page?: number | string,
  limit?: number | string,
) => {
  const p: number = Math.max(1, Number(page ?? 1));
  const l: number = Math.min(100, Math.max(1, Number(limit ?? 10)));
  const skip: number = (p - 1) * l;
  return { page: p, limit: l, skip };
};

// The main Service function to discover doctors based on the provided parameters

export const discoverDoctors = async (
  params: DiscoveryParams,
): Promise<{ doctors: DoctorDiscoveryResult[]; pagination: Pagination }> => {
  const { search, sort, p, l, ...filters } = params;
  const searchQuery = buildSearch(search);
  const filterQuery: Record<string, unknown> = {
    ...buildFilters(filters),
    verificationStatus: "verified",
  };
  const sortQuery = buildSort(sort);
  // pagination
  const { page, limit, skip } = buildPagination(p, l);

  const finalQuery = searchQuery
    ? { $and: [searchQuery, filterQuery] }
    : filterQuery;

  const totalDoctors = await DoctorModel.countDocuments(finalQuery).exec();
  const totalPages = Math.ceil(totalDoctors / limit);

  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;
  const pagination = {
    page,
    limit,
    totalDoctors,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };

  const doctors = await DoctorModel.find(finalQuery)
    .populate("userId", "firstName lastName profileImage gender")
    .populate("hospitalId", "name ")
    .sort(sortQuery)
    .skip(skip)
    .limit(limit)
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
  if (doctor.verificationStatus !== "verified") return null;

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
    verificationStatus: (doctor.verificationStatus as "verified") ?? undefined,
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
  return result;
};
