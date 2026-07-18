import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FiltroSelect from "../FiltroSelect/FiltroSelect";
import TarjetaDisco from "../TarjetaDisco/TarjetaDisco";
import { getDiscos } from "../../services/discoService";

const Catalogo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [generos, setGeneros] = useState([]);
  const [discos, setDiscos] = useState([]);
  const [error, setError] = useState(null);

  const cargarDiscos = async () => {
    try {
      const data = await getDiscos();
      setDiscos(data);
      setGeneros([...new Set(data.map((disco) => disco.genero))]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarDiscos();
  }, []);

  const genero = searchParams.get("genero") || "";

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

  if (loading) {
    return <p>Cargando discos...</p>;
  }
  if (error) {
    return <p>No se pudieron cargar discos.</p>;
  }

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
