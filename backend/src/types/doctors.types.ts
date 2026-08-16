interface DiscoveryParams {
  search?: string;
  specializations?: string;
  primarySpecialization?: string;
  consultationMode?: "physical" | "virtual";
  practiceType?: "hospital" | "private" | "both";
  minFee?: number;
  maxFee?: number;
  city?: string;
  state?: string;
  country?: string;
  sort?: "fee_asc" | "fee_desc" | "newest" | "relevance";
  p?: number;
  l?: number;
}
interface DoctorDiscoveryResult {
  id: string;
  primarySpecialization: string;
  yearsOfExperience?: number;
  consultationFee?: number;
  verificationStatus: "verified";
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
  id: string;
  primarySpecialization: string | undefined;
  specializations: string[];
  yearsOfExperience?: number;
  consultationFee?: number;
  verificationStatus: "verified";
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

interface Pagination {
  page: number;
  limit: number;
  totalDoctors: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export {
  DoctorDetailsResult,
  DoctorDiscoveryResult,
  Pagination,
  DiscoveryParams,
};
