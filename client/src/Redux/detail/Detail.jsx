import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css"

const Detail = () => {
  const { id } = useParams();
  const [videoGamesId, SetvideoGameId] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then(({ data }) => {
        SetvideoGameId(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles de videogame:", error);
      });
  }, [id]);

  return (
    <div className="arcade-game">
      <h1 className="game-name">{videoGamesId.Nombre}</h1>
      <img className="game-image" src={videoGamesId.Imagen} alt={videoGamesId.id}/>
      <h1 className="game-description">{videoGamesId.Descripcion}</h1>
      <h1 className="game-release-date">{videoGamesId.FechaLanzamiento}</h1>
      <h1 className="game-rating">{videoGamesId.Rating}</h1>
      <h1 className="game-genres">{videoGamesId.Generos}</h1>
      <h1 className="game-platform">{videoGamesId.Plataformas}</h1>
      <h1 className="game-id">{videoGamesId.id}</h1>
    </div>
  );
};

export default Detail;
