import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  allowedRoles: Array<"patient" | "doctor">;
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { firebaseUser, mongoUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface">
        <p className="text-sm font-body-md text-primary animate-pulse">
          Verifying secure system access credentials...
        </p>
      </div>
    );
  }

  if (firebaseUser === null) {
    return <Navigate to="/login" replace />;
  }

  if (firebaseUser && mongoUser === null) {
    return <Navigate to="/signup-details" replace />;
  }

  if (mongoUser && mongoUser.onboardingStatus === "pending") {
    const targetStep = mongoUser?.onboardingStep || 1;
    return <Navigate to={`/medicalonboarding?step=${targetStep}`} replace />;
  }

  if (mongoUser && mongoUser.role) {
    if (mongoUser.onboardingStatus === "pending") {
      return (
        <Navigate to={`/medicalonboarding?step=${mongoUser.onboardingStep}`} />
      );
    }

    if (!allowedRoles.includes(mongoUser.role)) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-surface-container-lowest p-6 text-center">
          <span className="material-symbols-outlined text-error text-headline-xl">
            gpp_bad
          </span>
          <h2 className="text-headline-md font-bold text-on-surface mt-4">
            Access Denied
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-sm mt-2">
            Your medical account profile credentials do not have permission to
            view this clinical workspace portal.
          </p>
        </div>
      );
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
