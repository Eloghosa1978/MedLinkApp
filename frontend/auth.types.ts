import type { User as FirebaseUser } from 'firebase/auth'

interface MongoUser {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "patient" | "doctor";
  onboardingStatus: "pending" | "completed" | "skipped"
  onboardingStep: number;
  phoneNumber: string;
  dateOfBirth: string;
  gender: "male" | "female"
}

interface OnboardingPayload {
  firstName: string;
  lastName: string;
  role: "patient" | "doctor";
}

interface AuthContextType {
  firebaseUser: FirebaseUser | null;
  mongoUser: MongoUser | null;
  loading: boolean;
  syncUserWithBackend: (profileData?: OnboardingPayload, explicitUser?: FirebaseUser) => Promise<MongoUser | null>
  handleLogout: () => Promise<void>
  onBoarding: (onboardingData: object) => Promise<{
  success: boolean;
  code: string;
  message: string;
  data: { onboardingStep: number };
} | null>
}

interface ProtectedRouteProps {
  allowedRoles: Array<"patient" | "doctor">
}

export type { AuthContextType }
export type { ProtectedRouteProps }
export type { OnboardingPayload }
export type { MongoUser }