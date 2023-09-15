import { Route, Routes } from "react-router-dom";
import Landing from "./Views/landing/Landing";
import Detail from "../src/Redux/detail/Detail";
import Home from "./Views/home/Home.jsx";
import Form from "./Views/form/Form";
import NavBar from "./Components/navBar/NavBar";
import { useLocation } from "react-router-dom";
import "./App.css"; 

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
