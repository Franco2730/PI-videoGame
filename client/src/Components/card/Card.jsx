import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, genre }) => {
  return (
    <div className="cards">
      <div className="card">
        <Link to={`/details/${id}`}>
            <img src={image} alt={name} className="card-image" />
        </Link>
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-id">{id}</p>
          <p className="card-genre">{genre}</p>
        </div>
      </div>
    </div>
  );
};


export default Card;





//Quien revisa los pi. 
//De que forma lo hacen. 

