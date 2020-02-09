import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//style
import './css/App.scss';

//routers
import Home from './routers/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
