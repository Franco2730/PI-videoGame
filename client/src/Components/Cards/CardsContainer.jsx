import "./CardsContainer.css";
import Card from "../Card/Card";

const CardsContainer = ({ allVideogames }) => {
  return (
    <div className="Container">
      {allVideogames.map((videogame) => {
        return (
          <Card
            key={videogame.id}
            id={videogame.id}
            image={videogame.image}
            name={videogame.name}
            genre={videogame.genre}
            //rating={ videogame.rating }
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
