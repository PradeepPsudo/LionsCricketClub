import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Tournament from "./pages/Tournament";
import Playpals from "./pages/Playpals";
import './styles/page.css';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tournament" component={Tournament} />
        <Route path="/playpals" component={Playpals} />
      </Switch>
    </Router>
  );
}
export default App;
