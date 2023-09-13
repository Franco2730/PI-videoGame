import { Link } from "react-router-dom";
import "./Landing.css";
import sound from './click.mp3'; 

const playSound = () => {
  const audio = new Audio(sound);
  audio.play();
};

const Landing = () => {
  return (
    <div className="estGloba">
      <div className="fondoLan">
        <h1 className="h1Lan">VideoGapis</h1>
        <Link to={"/home"}>
          <button onClick={playSound} className="btnLan" type="button" >
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;








// import { Link } from "react-router-dom";
// import "./Landing.css";

// const Landing = () => {
//   return (
//     <div className="estGloba">
//       <div className="fondoLan">
//         <h1 className="h1Lan">VideoGapis</h1>
//         <Link to={"/home"}>
//           <button className="btnLan" type="button" >
//             HOME
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Landing;
