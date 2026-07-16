import { useNavigate } from "react-router-dom";

const AccesoAdmin = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-5">
      <div className="card text-center shadow-sm">
        <div className="card-body py-5">
          <h3 className="card-title">¿Administrás el catálogo?</h3>

          <p className="card-text text-muted">
            Accedé al panel de administración para gestionar los discos.
          </p>

          <button className="btn btn-dark" onClick={() => navigate("/login")}>
            Ingresar
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccesoAdmin;
