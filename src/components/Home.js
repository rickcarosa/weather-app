import React from 'react';
import Current from './Current';
import { Container, Button } from './styled-components';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <Container>
      <Link to="/five-day">
        <Button>Five Day Forecast</Button>
      </Link>
      <Link to="/character">
        <Button>Character</Button>
      </Link>
      <Current baseUrl={props.baseUrl} />
    </Container>
  );
  // return <Current {...props} />
};

export default Home;
