import { useState } from "react";
import { authenticate } from "../../services/usuarioService";

const FormularioLogin = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioEncontrado = authenticate(usuario, password);

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado);
    } else {
      onLogin(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>

        <input
          id="usuario"
          type="text"
          className="form-control"
          placeholder="Ingrese su usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>

        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </div>

      <button type="submit" className="btn btn-dark w-100">
        Ingresar
      </button>
    </form>
  );
};

export default FormularioLogin;
