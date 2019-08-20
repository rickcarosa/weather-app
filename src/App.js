import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  const [baseUrl] = useState('https://api.openweathermap.org/data/2.5');

  return (
    <Router basename="/">
      <Switch>
        <Route
          exact
          path="/"
          // component={Home}
          render={() => <Home baseUrl={baseUrl} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
