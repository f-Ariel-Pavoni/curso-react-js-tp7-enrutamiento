import TarjetaDisco from "../TarjetaDisco/TarjetaDisco";
import discos from "../../data/discos";

const Catalogo = () => {
  console.log(discos);
  return (
    <div className="container">
      <div className="row g-4">
        {discos.length === 0 ? (
          <p>No hay discos disponibles para mostrar.</p>
        ) : (
          discos.map((disco) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={disco.id}>
                <TarjetaDisco disco={disco} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Catalogo;
