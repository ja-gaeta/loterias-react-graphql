import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Import Views */
import Home from '../views/Home';
import Quina from '../views/Quina';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quina" component={Quina} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
