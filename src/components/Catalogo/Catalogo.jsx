import { useSearchParams } from "react-router-dom";
import FiltroSelect from "../FiltroSelect/FiltroSelect";
import TarjetaDisco from "../TarjetaDisco/TarjetaDisco";
import discos from "../../data/discos";
import { getGeneros } from "../../services/discoService";

const Catalogo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genero = searchParams.get("genero") || "";
  const generos = getGeneros();

  const discosFiltrados = genero
    ? discos.filter((disco) => disco.genero === genero)
    : discos;

  const handleGeneroChange = (e) => {
    const valor = e.target.value;

    if (valor) {
      setSearchParams({ genero: valor });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <FiltroSelect
        textoDefault="Todos los géneros"
        id="filtro-genero"
        opciones={generos}
        valor={genero}
        onChange={handleGeneroChange}
        label="Filtrar por género"
      />
      <div className="row g-4">
        {discosFiltrados.length === 0 ? (
          <p>No hay discos disponibles para mostrar.</p>
        ) : (
          discosFiltrados.map((disco) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={disco.id}>
                <TarjetaDisco disco={disco} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Catalogo;
