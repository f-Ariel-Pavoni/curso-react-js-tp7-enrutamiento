import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin";
import ModalEstado from "../../components/ModalEstado/ModalEstado";

const Login = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const destino = location.state?.from?.pathname || "/dashboard";

  const manejarLogin = (usuario) => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate(destino);
    } else setMostrarModal(true);
  };

  return (
    <>
      <h1>Login</h1>
      <FormularioLogin onLogin={manejarLogin} />
      {mostrarModal && (
        <ModalEstado
          tipo="error"
          mensaje="Usuario o contraseña incorrectos"
          onClose={() => setMostrarModal(false)}
        />
      )}
    </>
  );
};

export default Login;
