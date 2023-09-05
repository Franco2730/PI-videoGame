import { Route, Routes } from "react-router-dom";
import Landing from "./Views/landing/Landing";
import Detail from "./Views/form/Form";
import Home from "./Views/home/Home.jsx";
import Form from "./Views/form/Form";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/details/:id" element={<Detail/>} />
        </Routes>
      </div>
  );
}

export default App;
//Ver resumen del video.