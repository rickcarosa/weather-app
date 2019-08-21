import React, { useEffect } from 'react';
import { InnerContainer } from './styled-components';
import axios from 'axios';

const Current = ({ baseUrl }) => {
  useEffect(() => {
    getCurrentWeather();
  });

  const getCurrentWeather = () => {
    axios
      .get(
        `${baseUrl}/weather?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return <InnerContainer>Hi</InnerContainer>;
};

export default Current;
