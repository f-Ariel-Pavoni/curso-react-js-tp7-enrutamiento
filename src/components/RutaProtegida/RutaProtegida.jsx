import { Navigate, useLocation } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const usuario = localStorage.getItem("usuario");
  const location = useLocation();

  if (!usuario) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RutaProtegida;
