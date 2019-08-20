import React, { useState, useEffect } from 'react';
import { Container } from './styled-components';
import axios from 'axios';

const FiveDay = ({ baseUrl }) => {
  useEffect(() => {
    console.log(baseUrl);
    getWeather();
  });

  const getWeather = () => {
    axios
      .get(
        `${baseUrl}/forecast?q=Rochester,US&appid${
          process.env.REACT_APP_APIKEY
        }`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return <Container>Hi</Container>;
};

export default FiveDay;
