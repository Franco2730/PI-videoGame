import Search from "../searchBar/searchBar";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Importa tu archivo de estilos

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to={"/"}>
        <button>Salir</button>
      </Link>

      <Link to={"/form"}>
        <button>Crear</button>
      </Link>

      <Link to={"/home"}>
        <button>Home</button>
      </Link>

      <Search />
    </div>
  );
};

export default NavBar;