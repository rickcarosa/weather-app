import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import { InnerContainer, Title, Data } from './styled-components';
import axios from 'axios';

const Current = props => {
  const [weather, setWeather] = useState(undefined);

  // runs on component mount. empty brackets [] allow this to only run once
  // useEffect(() => {
  //   getCurrentWeather();
  // }, []);

  const getCurrentWeather = () => {
    axios
      .get(
        `${props.baseUrl}/weather?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
      )
      .then(res =>
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

// this will work the same as above just written as a class component.

// class Current extends Component {
//   constructor() {
//     super();

//     this.state = { weather: undefined };
//   }

//   componentDidMount() {
//     this.getCurrentWeather();
//     console.log(this.state.weather);
//   }

//   getCurrentWeather = () => {
//     axios
//       .get(
//         `${this.props.baseUrl}/weather?id=5134086&appid=${process.env.REACT_APP_APIKEY}`
//       )
//       .then(res =>
//         this.setState({
//           weather: Math.round((res.data.main.temp - 273.15) * 1.8 + 32),
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <InnerContainer>
//         <Title>Current Weather</Title>
//         <Data>{this.state.weather} Degrees Fahrenheit</Data>
//       </InnerContainer>
//     );
//   }
// }

// export default Current;
