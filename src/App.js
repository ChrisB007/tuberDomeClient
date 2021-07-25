import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route>
            <Home path="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
