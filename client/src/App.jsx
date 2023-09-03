import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Views/Form";
import Detail from "./Views/Form";
import Home from "./Views/Home";
import Form from "./Views/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/home" Component={Home} />
          <Route path="/form" Component={Form} />
          <Route path="/" Component={Landing} />
          <Route path="/details:id" Component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
