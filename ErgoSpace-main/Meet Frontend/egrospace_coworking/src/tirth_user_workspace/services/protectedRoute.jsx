import LoginRequired from "../pages/Access_request/Login_Request";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? children : <LoginRequired />;
};

export default ProtectedRoute;