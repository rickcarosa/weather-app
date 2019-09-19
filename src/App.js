import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FiveDay from './components/FiveDay';
import Character from './components/Character';

const App = () => {
  const [baseUrl] = useState('https://api.openweathermap.org/data/2.5');

  return (
    <Router basename="/">
      <Switch>
        <Route
          exact
          path="/"
          // component={Home}
          // {...props}
          // use render to pass state as props.
          // you can use component if you didn't have state but rather had props from something like redux.
          render={() => <Home baseUrl={baseUrl} />}
        />
        <Route
          exact
          path="/five-day"
          render={() => <FiveDay baseUrl={baseUrl} />}
        />
        <Route exact path="/character" component={Character} />
      </Switch>
    </Router>
  );
};

export default App;
