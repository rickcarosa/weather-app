import React from 'react';
import Current from './Current';
import { Container, Button } from './styled-components';
import { NavLink } from 'react-router-dom';

const Home = props => {
  return (
      <Container>
        <NavLink to="/five-day">
          <Button>Five Day Forecast</Button>
        </NavLink>
        <NavLink to="/character">
          <Button>Character</Button>
        </NavLink>
        <Current baseUrl={props.baseUrl} />
      </Container>
    
  );
  // return <Current {...props} />
};

export default Home;
