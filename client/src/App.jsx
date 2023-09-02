import Home from './Views/Home';
import Form from './Views/Form';
import Landing from './Views/Form';
import Detail from './Views/Form';
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";


function App() {

  const location = useLocation();

  return (
    <div className="App">
     <Home/>
     <Form/>
     <Landing/>
     <Detail/>
    </div>
  );
}

export default App;

