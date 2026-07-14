import { useParams } from "react-router-dom";
import Tracklist from "../../components/Tracklist/Tracklist";
import NotFound from "../NotFound/NotFound";

import { getDiscoById } from "../../services/discoService";

const Disco = () => {
  const { id } = useParams();
  const disco = getDiscoById(id);

  if (!disco) {
    return <NotFound />;
  }

  return (
    <div className="container py-4">
      <div className="row">
        {/* Portada */}
        <div className="col-md-4">
          <img
            src={disco.portada}
            alt={disco.titulo}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Información */}
        <div className="col-md-8">
          <h1>{disco.titulo}</h1>
          <h3>{disco.artista}</h3>

          <div className="mt-3">
            <p>
              <strong>Año:</strong> {disco.anio}
            </p>

            <p>
              <strong>Género:</strong> {disco.genero}
            </p>

            <p>
              <strong>Sello:</strong> {disco.sello}
            </p>

            <p>
              <strong>Precio:</strong> ${disco.precio}
            </p>
          </div>

          <hr />

          <p>{disco.descripcion}</p>
        </div>
      </div>

      {/* Tracklist */}
      <div className="mt-5">
        <h2>Tracklist</h2>

        <Tracklist tracklist={disco.tracklist} />
      </div>
    </div>
  );
};

export default Disco;
