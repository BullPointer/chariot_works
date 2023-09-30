import { Navigate, useLocation } from "react-router-dom";

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const location = useLocation();
  const tokenExists = localStorage?.getItem("token");
  if (tokenExists) {
    const token = JSON.parse(tokenExists);
    const expiredTimestamp = token?.exp;
    const currentTimestamp = Math.floor(Date.now());

    if (children && expiredTimestamp < currentTimestamp) {
      localStorage.removeItem("token");
      return (
        <Navigate to={"/usr/sign-in"} state={{ path: location.pathname }} />
      );
    }

    return children;
  } else {
    return <Navigate to={"/usr/sign-in"} state={{ path: location.pathname }} />;
  }
};
