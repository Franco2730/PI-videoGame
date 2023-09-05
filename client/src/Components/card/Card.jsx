import "./Card.css";

const Card = ({ id, name, image, genre }) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={image} alt={name} className="card-image" />
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

// const Card = ({ id, name, image, genre }) => {
//   return (
//     <div className="card">
//       <div>
//         <img src={image} alt="" />
//         {id}
//         {name}
//         {genre}
//       </div>
//     </div>
//   );
// };
