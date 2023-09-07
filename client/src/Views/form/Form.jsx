import { useState } from "react";
import "./Form.css";
import axios from "axios";


const Form = () => {

  const [form, setForm] = useState({
        name : "",
        description : "",
        platforms : "",
        image : "",
        releaseDate : "",
        rating : "",
        Genero: []
  });

  
  const changeHandler = (event) => {
    const property = event.target.name; //propiedad del estado form = name del imput
    const value = event.target.value; // guardo el valuo (cuando tipeo en el imput)

    setForm({ ...form, [property]: value }); //seteo el etado del formulario con las values correspondientes
 //llamo a la funcion validate pasandole lo mismo que al setForm para que nop ocurra un desfasaje
  };


  //funcion que previene el comportamiento default del submit (recargado de pagina) y hace la peticion post al backend
  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res.data))
      .catch((error) => alert(error));

    setForm({
        name : "",
        description : "",
        platforms : "",
        image : "",
        releaseDate : "",
        rating : ""
    });
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="container">
        <input
          type="text"
          placeholder="Nombre"
          value={form.name}
          name="name"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Descripcion del juego"
          value={form.description}
          name="description"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          name="rating"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Plataformas"
          value={form.platforms}
          name="platforms"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="FechaLanzamiento"
          value={form.releaseDate}
          name="releaseDate"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="checkBox">
        <input type="text" placeholder="Url de la imagen" name="image" onChange={changeHandler}></input>
        {form.image && (
          <img src={form.image} alt={form.name} className="imagePreview" />
        )}
      </div>
      <button className="form-button" type="submit">
        Crear Juego
      </button>
    </form>
  );
};


export default Form;
