import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import {
  InnerContainer,
  Container,
  Button,
  Title,
  Input,
} from './styled-components';
import { Link } from 'react-router-dom';

const FiveDay = props => {
  const [text, setText] = useState('');
  const [weatherList, setWeatherList] = useState([]);

  const handleTextChange = e => {
    setText(e.target.value);
  };

  // spread operator to copy weather list items to new array and add text value. array starts empty.
  // clear input box on submit
  const addWeather = () => {
    setWeatherList([...weatherList, text]);
    setText('');
  };

  return (
    <Container>
      <Link to="/">
        <Button color="red">Home</Button>
      </Link>
      <InnerContainer color="black">
        <Title>Five Day Weather</Title>
      </InnerContainer>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}
      >
        <Input
          type="text"
          onChange={handleTextChange}
          value={text}
          placeholder="Weather"
        />
        <Button
          type="submit"
          padding="5px 5px"
          marginLeft="10px"
          onClick={addWeather}
        >
          Add
        </Button>
      </div>
      {weatherList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Container>
  );
};

export default FiveDay;

// this will work the same as above just written as a class component.

// class FiveDay extends Component {
//   constructor() {
//     super();

//     this.state = { :  };
//   }

//   componentDidMount() {
//   }

//   render() {
//     return (
//        <Container>
//     <InnerContainer color="black">
//     <Title>Five Day Weather</Title>
//   </InnerContainer>
//   <Link to="/">
//     <Button color="red">Home</Button>
//   </Link>
// </Container>
//     );
//   }
// }

// export default FiveDay;
