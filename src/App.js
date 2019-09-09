import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import FiveDay from './components/FiveDay';

const App = () => {
  const [baseUrl] = useState('https://api.openweathermap.org/data/2.5');

  // useEffect(() => {
  //   console.log(props.location.pathname)
  // })

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
      </Switch>
    </Router>
  );
};

export default App;
