import { Link } from "react-router-dom";
import "./Landing.css";


const Landing = () => {
  return (
    <div className="estGloba">
      <div className="fondoLan">
        <h1 className="h1Lan">VideoGapis</h1>
        <Link to={"/home"}>
          <button className="btnLan" type="button">
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
