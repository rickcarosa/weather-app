import React from 'react';
import FiveDay from './FiveDay';
import Current from './Current';
import { Container, Button } from './styled-components';

const Home = props => {
  return (
    <Container>
      {/* <FiveDay baseUrl={props.baseUrl} /> */}
      <Current baseUrl={props.baseUrl} />
      <Button>Five Day Forecast</Button>
    </Container>
  );
  // return <FiveDay {...props} />
};

export default Home;
