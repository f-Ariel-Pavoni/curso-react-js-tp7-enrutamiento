const Tracklist = ({ tracklist }) => {
  return (
    <ul>
      {tracklist.map((tema) => (
        <li key={tema.numero}>
          {tema.numero} - {tema.titulo}
        </li>
      ))}
    </ul>
  );
};

export default Tracklist;
