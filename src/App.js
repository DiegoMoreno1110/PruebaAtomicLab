import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Codigo from './components/Conocenos/Codigo';
import Conocenos from './components/Conocenos/Conocenos';
import Edit from './components/Conocenos/Edit';
import Exito from './components/Conocenos/Exito';
import Terminos from './components/Conocenos/Terminos';
import Valida from './components/Conocenos/Valida';
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
          <ContainerMensaje
            mensaje={'Te hemos enviado el código al número que nos proporcionaste'}
            imagen={'checkmark'}
            link={'verifica'}
          />
        </Route>
        <Route exact path="/messageCodigo">
          <ContainerMensaje
            mensaje={'Hemos validado el código'}
            imagen={'checkmark'}
            link={'terminos'}
          />
        </Route>
        <Route exact path="/messageEnviar">
          <ContainerMensaje
            mensaje={'Te hemos reenviado el código...'}
            imagen={'component'}
            link={'messageValidaCodigo'}
          />
        </Route>
        <Route exact path="/messageValidaCodigo">
          <ContainerMensaje
            mensaje={'Te hemos enviado el código al número que nos proporcionaste'}
            imagen={'checkmark'}
            link={'verifica'}
          />
        </Route>
        <Route exact path="/verifica">
          <Codigo/>
        </Route>
        <Route exact path="/terminos">
          <Terminos/>
        </Route>
        <Route exact path="/valida">
          <Valida/>
        </Route>
        <Route exact path="/edita">
          <Edit/>
        </Route>
        <Route exact path="/exito">
          <Exito/>
        </Route>


      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
