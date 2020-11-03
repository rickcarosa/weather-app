import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import FiveDay from '../components/FiveDay';
import Character from '../components/Character';
import Navigation from '../components/Navigation';
import { MainContainer } from '../components/styled-components';
import Bar from '../components/Bar';
import Sidebar from '../components/Sidebar';
import Export from '../components/Export';
import axios from 'axios';

const App = () => {
  const [baseUrl] = useState('https://api.openweathermap.org/data/2.5');
  const [role] = useState('ADMIN');

  return (
    <Router basename='/'>
      <Navigation />
      <Switch>
        <MainContainer>
          <Sidebar />
          <Route
            exact
            path='/'
            // component={Home}
            // {...props}
            // use render to pass state as props.
            // you can use component if you didn't have state but rather had props from something like redux.
            render={() => <Home baseUrl={baseUrl} role={role} />}
          />
          <Route
            exact
            path='/five-day'
            render={() => <FiveDay baseUrl={baseUrl} />}
          />
          <Route exact path='/character' component={Character} />
          <Route exact path='/bar' component={Bar} />
          <Route exact path='/export' component={Export} />
        </MainContainer>
      </Switch>
    </Router>
  );
};

export default App;
