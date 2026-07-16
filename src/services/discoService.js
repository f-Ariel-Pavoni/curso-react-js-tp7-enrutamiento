import discos from "../data/discos";

export const getDiscoById = (id) => {
  return discos.find((disco) => disco.id === Number(id));
};

export const getGeneros = () => {
  return [...new Set(discos.map((disco) => disco.genero))];
};
