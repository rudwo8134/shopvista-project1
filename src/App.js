import react from "react";
import {HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact to="/" render={()=><Home/>}/>
      </Switch>
    </Router>
  );
}

export default App;
