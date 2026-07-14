import { Link } from "react-router-dom";

function TarjetaDisco({ disco }) {
  return (
    <Link to={`/disco/${disco.id}`} className="text-decoration-none">
      <div className="card h-100">
        <img src={disco.portada} className="card-img-top" alt={disco.titulo} />

        <div className="card-body">
          <h5 className="card-title">{disco.titulo}</h5>

          <p className="card-text">{disco.artista}</p>
        </div>
      </div>
    </Link>
  );
}

export default TarjetaDisco;
