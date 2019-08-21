import React, { useState, useEffect } from 'react';
import { InnerContainer, Container, Button, Title } from './styled-components';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const FiveDay = props => {
  useEffect(() => {
    console.log(props.location.pathname);
    console.log(props);
    getWeather();
  });

  const getWeather = () => {
    // axios
    //   .get(
    //     `${props.baseUrl}/forecast?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  return (
    <Container>
      <InnerContainer color="black">
        <Title>Five Day Weather</Title>
      </InnerContainer>
      <Link to="/">
        <Button color="red">Home</Button>
      </Link>
    </Container>
  );
};

export default withRouter(FiveDay);
