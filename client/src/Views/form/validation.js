const validate = (form) => {
  const errors = {};

  // Validar el campo Nombre (solo debe contener caracteres)
  if (/^[A-Za-z\s\-()']+$/.test(form.name)) {
    errors.name = ""; // Si es válido, se elimina el mensaje de error
  } else if (form.name === "") {
    errors.name = "El name del videogame no puede estar vacío.";
  } else {
    errors.name =
      "El nombre del videogame solo debe contener caracteres alfanumericos.";
  }

  // Validar el campo description (no debe estar vacio)
  if (form.description.trim() !== "") {
    errors.description = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.description = "Este campo no puede estar vacío.";
  }

  // Validar el campo rating (debe ser un valor entre 1 y 10)
  const Rating = parseInt(form.rating);
  if (!isNaN(Rating) && Rating >= 1 && Rating <= 10) {
    errors.Rating = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.Rating = "El valor de Rating debe ser un número entre 1 y 10.";
  }

  // Validar el campo Plataformas (no debe estar vacío)
  if (form.platforms.trim() !== "") {
    errors.platforms = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.platforms = "Este campo no puede estar vacío.";
  }

  const plataformasValidas = ["Xbox", "PlayStation", "PC", "Mobile", "xbox", "playStation", "pc", "mobile"];
  if (plataformasValidas.includes(form.platforms)) {
    errors.platforms = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.platforms = "La plataforma debe ser Xbox, PlayStation, PC o Mobile.";
  }

  return errors;
};

export default validate;
