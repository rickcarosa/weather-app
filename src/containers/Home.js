import React from 'react';
import Current from '../components/Current';
import { Container, Button } from '../components/styled-components';
import { NavLink } from 'react-router-dom';
import Role from '../components/Role';

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
        {props.role === "ADMIN" ? <Role role={props.role}/> : <div>Nothing to see</div>}
      </Container>
    
  );
  // return <Current {...props} />
};

export default Home;
