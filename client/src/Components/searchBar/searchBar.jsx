import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideoGame } from "../../Redux/actions";
import "./searchBar.css";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handlerChange = (event) => {
    setInput(event.target.value); //cada vez que cambia el input, deberá tomar su valor.
  };

  const handlerAdd = () => {
    dispatch(getNameVideoGame(input));
  };
  return (
    <div className="container-Fi">
      <div className="mario-container">
        <input
          className="mario-input"
          onChange={handlerChange}
          value={input}
          type="text"
          placeholder="Search your favorite Video Game"
        />
        <button className="mario-button" onClick={handlerAdd}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
