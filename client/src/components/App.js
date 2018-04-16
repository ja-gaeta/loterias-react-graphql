import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Import Views */
import Home from '../views/Home';
import Quina from '../views/Quina';
import Megasena from '../views/Megasena';
import Lotofacil from '../views/Lotofacil';
import Duplasena from '../views/Duplasena';
import Lotomania from '../views/Lotomania';
import Timemania from '../views/Timemania';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quina" component={Quina} />
          <Route path="/megasena" component={Megasena} />
          <Route path="/lotofacil" component={Lotofacil} />
          <Route path="/duplasena" component={Duplasena} />
          <Route path="/lotomania" component={Lotomania} />
          <Route path="/timemania" component={Timemania} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
