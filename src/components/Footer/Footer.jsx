import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h5 className="fw-semibold mb-2">MidnightGroove</h5>

        <p className="text-secondary mb-2">
          Catálogo curado de discos de jazz en vinilo.
        </p>

        <small className="text-secondary">
          © {currentYear} MidnightGroove - Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
