import { useState } from "react"
import { useDispatch } from 'react-redux';
import { getNameVideoGame } from "../../Redux/actions";


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
    <div>
      <input onChange={handlerChange} value={input} type="text" />
      <button onClick={handlerAdd}>Buscar</button>
    </div>
  );
};

export default Search;
