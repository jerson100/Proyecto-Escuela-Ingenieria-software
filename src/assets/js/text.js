export const capitalize = (txt) => {
  if (typeof txt !== "string") {
    throw new Error("El argumento pasado debe ser un string");
  }
  return txt.charAt(0).toUpperCase() + txt.slice(1);
};
