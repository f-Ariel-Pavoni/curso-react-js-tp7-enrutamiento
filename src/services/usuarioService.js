import usuarios from "../data/usuarios";

export const authenticate = (usuario, password) => {
  const usuarioEncontrado = usuarios.find(
    (usr) => usr.usuario === usuario && usr.password === password,
  );

  if (!usuarioEncontrado) return null;

  return {
    usuario: usuarioEncontrado.usuario,
  };
};
