import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Conocenos from './components/Conocenos/Conocenos';
import LandingPage from './components/LandinPage/LandingPage';
import ContainerMensaje from './components/Message/ContainerMensaje';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/conocenos">
          <Conocenos/>
        </Route>
        <Route exact path="/message">
          <ContainerMensaje/>
        </Route>

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
