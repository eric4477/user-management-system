import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { logedInUser } = useContext(StoreContext);

  if (!logedInUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
