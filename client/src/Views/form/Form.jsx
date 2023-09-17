import { useState } from "react";
import "./Form.css";
import axios from "axios";
import { useSelector } from "react-redux";
import validate from "./validation";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    releaseDate: "",
    rating: "",
    genre: [],
  });

  const [errors, setErrors] = useState({
    //3
    name: "",
    description: "",
    Rating: "",
    platforms: "",
    releaseDate: "",
  });

  const [selectedGenres, setSelectedGenres] = useState([]);

  const checkboxChangeHandler = (event) => {
    const value = event.target.value;

    let updatedSelectedGenres;

    if (event.target.checked) {
      updatedSelectedGenres = [...selectedGenres, value];
    } else {
      updatedSelectedGenres = selectedGenres.filter((genre) => genre !== value);
    }

    setSelectedGenres(updatedSelectedGenres);
    setForm({ ...form, genre: updatedSelectedGenres });
  };

  const genres = useSelector((state) => state.genres);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value })); //3
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert("Tu videojuego ha sido creado exitosamente"))
      .catch((error) => alert("Ha ocurrido un error al crear tu videojuego"));

    setForm({
      name: "",
      description: "",
      platforms: "",
      image: "",
      releaseDate: "",
      rating: "",
      genre: [],
    });
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === "");
  };

  return (
    <div className="background">
      <form onSubmit={submitHandler} className="form-container">
        <h1>Crea tu Videojuego</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            name="name"
            onChange={changeHandler}
          />
          {/* 3 */}
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Descripción del juego"
            value={form.description}
            name="description"
            onChange={changeHandler}
          />

          {errors.description && <p>{errors.description}</p>}
        </div>

        <div className="input-container">
          <input
            type="number"
            placeholder="Rating"
            value={form.rating}
            name="rating"
            onChange={changeHandler}
          />
          {errors.Rating && <p>{errors.Rating}</p>}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Plataformas"
            value={form.platforms}
            name="platforms"
            onChange={changeHandler}
          />
          {errors.text && <p>{errors.text}</p>}
        </div>

        <div className="input-container">
          <input
            type="date"
            placeholder="Fecha de Lanzamiento"
            value={form.releaseDate}
            name="releaseDate"
            onChange={changeHandler}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="URL de la imagen"
            name="image"
            onChange={changeHandler}
          />
          {errors.image && <p>{errors.image}</p>}
          {form.image && (
            <img src={form.image} alt={form.name} className="imagePreview" />
          )}
        </div>
        <div className="genre-container">
          <h2>Géneros:</h2>
          <div className="genre-grid">
            {genres.map((genre) => (
              <label key={genre.name} className="genre-label">
                <input
                  type="checkbox"
                  value={genre.name}
                  name="genre"
                  checked={selectedGenres.includes(genre.name)}
                  onChange={checkboxChangeHandler}
                />
                {genre.name}
              </label>
            ))}
          </div>
        </div>
        <button disabled={!isFormValid()} className="form-button" type="submit">
          Crear Juego
        </button>
      </form>
    </div>
  );
};

export default Form;
