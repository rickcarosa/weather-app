import React, { useEffect } from 'react';
import { InnerContainer, Title } from './styled-components';
import axios from 'axios';

const Current = props => {
  useEffect(() => {
    getCurrentWeather();
  });

  const getCurrentWeather = () => {
    // axios
    //   .get(
    //     `${props.baseUrl}/weather?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  return (
    <InnerContainer>
      <Title>Current Weather</Title>
    </InnerContainer>
  );
};

export default Current;
