const FiltroSelect = ({
  opciones,
  valor,
  onChange,
  label,
  id,
  textoDefault = "Todos",
}) => {
  {
    return (
      <div className="mb-4">
        {label && (
          <label className="form-label" htmlFor={id}>
            {label}
          </label>
        )}

        <select
          id={id}
          className="form-select"
          value={valor}
          onChange={onChange}
        >
          <option value="">{textoDefault}</option>

          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

export default FiltroSelect;
