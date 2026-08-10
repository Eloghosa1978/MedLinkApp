import mongoose from "mongoose";
import { DoctorModel, DoctorDocument } from "../models/doctorModel";


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

// Helper service

export const escapeRegExp = (text: string) =>
  text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters for regex

export const buildSearch = (
  search?: string,
): FilterQuery<DoctorDocument> | null => {
  if (!search) return null;

  const escapedSearch = new RegExp(escapeRegExp(search), "i"); // Case-insensitive search
  return {
    $or: [
      { biography: { $regex: escapedSearch } },
      { qualifications: { $in: [escapedSearch] } },
      { licenseNumber: { $regex: escapedSearch } },
      { specialization: { $regex: escapedSearch } },
      { name: { $reqex: escapedSearch } },
    ],
  };
};

export const buildFilters = (
  params: DiscoveryParams,
): FilterQuery<DoctorDocument> => {
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

  const filter: FilterQuery<DoctorDocument> = {};

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
  if (verificationStatus) filter.veriificationStatus = verificationStatus;

  if (minFee !== undefined || maxFee !== undefined) {
    filter.consultationFee = {} as any;
    if (minFee !== undefined) filter.consultationFee.$gte = Number(minFee);
    if (maxFee !== undefined) filter.consultationFee.$lte = Number(maxFee);
  }

  if (city) filter["practiceLocation.city"] = city;
  if (state) filter["practiceLocation.state"] = state;
  if (country) filter["practiceLocation.country"] = country;

  return filter;
};

export const buildSort = (sort?: DiscoveryParams["sort"]) => {
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

  return {page: p, limit: l, skip, totalItems};
};
