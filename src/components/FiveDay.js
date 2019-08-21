import React, { useEffect } from 'react';
import { InnerContainer } from './styled-components';
import axios from 'axios';

const FiveDay = ({ baseUrl }) => {
  useEffect(() => {
    console.log(baseUrl);
    getWeather();
  });

  const getWeather = () => {
    // axios
    //   .get(
    //     `${baseUrl}/forecast?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
    //   )
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  return <InnerContainer>Hi</InnerContainer>;
};

export default FiveDay;
