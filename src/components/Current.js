import React, { useState, useEffect } from 'react';
import { InnerContainer, Title, Data } from './styled-components';
import axios from 'axios';

const Current = props => {
  const [weather, setWeather] = useState(undefined);

  // runs on component mount. empty brackets [] allow this to only run once when the component mounts the first time
  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = () => {
    axios
      .get(
        `${props.baseUrl}/weather?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
      )
      .then(res =>
        // conversion from Kelvin to Fahrenheit
        setWeather(Math.round((res.data.main.temp - 273.15) * 1.8 + 32))
      )
      .catch(err => console.log(err));
  };

  return (
    <InnerContainer>
      <Title>Current Weather</Title>
      <Data>{weather} Degrees Fahrenheit</Data>
    </InnerContainer>
  );
};

export default Current;
