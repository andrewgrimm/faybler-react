
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Featured from '../components/Featured';
import Empty from '../components/Empty';
import Menu from '../components/AppMenu';

const AppRouter = () => (
  <BrowserRouter>
    <>
      <h1>
        Faybler
      </h1>
      <Switch>
        <Route exact path="/" component={Featured} />
        <Route path="/empty" component={Empty} />
      </Switch>
      <Menu />
    </>
  </BrowserRouter>
);

export default AppRouter;
