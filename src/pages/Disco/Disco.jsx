import { useParams } from "react-router-dom";
import Tracklist from "../../components/Tracklist/Tracklist";
import { getDiscoById } from "../../services/discoService";

const Disco = () => {
  const { id } = useParams();
  const disco = getDiscoById(id);

  if (!disco) {
    return <p>Disco no encontrado</p>;
  }

  return (
    <div className="container">
      <h1>{disco.titulo}</h1>
      <h2>{disco.artista}</h2>
      <p>{disco.anio}</p>
      <Tracklist tracklist={disco.tracklist} />
    </div>
  );
};

export default Disco;
