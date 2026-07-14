import discos from "../data/discos";

export const getDiscoById = (id) => {
  return discos.find((disco) => disco.id === Number(id));
};
