import React, { useState, useEffect } from 'react';
import Current from './Current';
import { Container, Button, Title } from './styled-components';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <Container>
      <Current baseUrl={props.baseUrl} />
      <Link to="/five-day">
        <Button>Five Day Forecast</Button>
      </Link>
    </Container>
  );
  // return <Current {...props} />
};

export default Home;
