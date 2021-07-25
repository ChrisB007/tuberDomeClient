import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route>
          <div>
            <Home path="/" />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
