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

  const [errors, setErrors] = useState({ //3
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
        <button disabled={!isFormValid()} className="form-button" type="submit">
          Crear Juego
        </button>
      </form>
    </div>
  );
};

export default Form;

//--

// import { useState } from "react";
// import "./Form.css";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const Form = () => {
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     platforms: "",
//     image: "",
//     releaseDate: "",
//     rating: "",
//     genre: [],
//   });

//   const [selectedgenres, setSelectedgenres] = useState([]); // Estado local para mantener las generos seleccionadas
//   const checkboxChangeHandler = (event) => {
//     const value = event.target.value;

//     let updatedSelectedGenres;

//     // Actualizar las generos seleccionadas
//     if (event.target.checked) {
//       updatedSelectedGenres = [...selectedgenres, value];
//     } else {
//       updatedSelectedGenres = selectedgenres.filter((genre) => genre !== value);
//     }
//     // Actualizar el estado de generos seleccionados y el estado del formulario
//     setSelectedgenres(updatedSelectedGenres);
//     setForm({ ...form, genre: updatedSelectedGenres });
//   };

//   const genres = useSelector((state) => state.genres); //2

//   const changeHandler = (event) => {
//     const property = event.target.name; //propiedad del estado form = name del imput
//     const value = event.target.value; // guardo el valuo (cuando tipeo en el imput)

//     setForm({ ...form, [property]: value }); //seteo el etado del formulario con las values correspondientes
//     //llamo a la funcion validate pasandole lo mismo que al setForm para que nop ocurra un desfasaje
//   };

//   //funcion que previene el comportamiento default del submit (recargado de pagina) y hace la peticion post al backend
//   const submitHandler = (event) => {
//     event.preventDefault();

//     axios
//       .post("http://localhost:3001/videogames", form)
//       .then((res) => alert("Tu video juego ha sido creado exitosamente"))
//       .catch((error) => alert("Ha ocurrido un error al crear tu video juego"));

//     setForm({
//       name: "",
//       description: "",
//       platforms: "",
//       image: "",
//       releaseDate: "",
//       rating: "",
//     });
//   };

//   return (
//     <form onSubmit={submitHandler} className="form-container">
//       <div className="container">
//         <input
//           type="text"
//           placeholder="Nombre"
//           value={form.name}
//           name="name"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="container">
//         <input
//           type="text"
//           placeholder="Descripcion del juego"
//           value={form.description}
//           name="description"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="container">
//         <input
//           type="number"
//           placeholder="Rating"
//           value={form.rating}
//           name="rating"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="container">
//         <input
//           type="text"
//           placeholder="Plataformas"
//           value={form.platforms}
//           name="platforms"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="container">
//         <input
//           type="date"
//           placeholder="FechaLanzamiento"
//           value={form.releaseDate}
//           name="releaseDate"
//           onChange={changeHandler}
//         ></input>
//       </div>
//       <div className="checkBox">
//         <input
//           type="text"
//           placeholder="Url de la imagen"
//           name="image"
//           onChange={changeHandler}
//         ></input>
//         {form.image && (
//           <img src={form.image} alt={form.name} className="imagePreview" />
//         )}
//       </div>

//       {genres.map((genero) => (
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               value={genero.name}
//               name="genre"
//               checked={selectedgenres.includes(genero.name)}
//               onChange={checkboxChangeHandler}
//             ></input>
//             {genero.name}
//           </label>
//         </div>
//       ))}

//       <button className="form-button" type="submit">
//         Crear Juego
//       </button>
//     </form>
//   );
// };

// export default Form;
