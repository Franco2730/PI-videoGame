import { Route, Routes } from "react-router-dom";
import Landing from "./Views/landing/Landing";
import Detail from "./Views/form/Form";
import Home from "./Views/home/Home.jsx";
import Form from "./Views/form/Form";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/form" Component={Form} />
          <Route path="/" Component={Landing} />
          <Route path="/details/:id" Component={Detail} />
        </Routes>
      </div>
  );
}

export default App;
