import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/Landing";
import WelcomePage from "./components/Welcome";

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
