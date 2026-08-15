import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  allowedRoles: Array<"patient" | "doctor">;
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { firebaseUser, mongoUser, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (firebaseUser === null) {
    return <Navigate to="/login" replace />;
  }

  if (firebaseUser && mongoUser === null) {
    return <Navigate to="/signup-details" replace />;
  }

  if (mongoUser && mongoUser.role) {
    if (mongoUser.onboardingStatus === "pending") {
      return (
        <Navigate to={`/medicalonboarding?step=${mongoUser.onboardingStep}`} />
      );
    }

    if (!allowedRoles.includes(mongoUser?.role)) {
      return <p>Unauthorized</p>;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
