import React, { useState } from 'react';
// import React, { Component } from 'react';
import {
  InnerContainer,
  Container,
  Button,
  Title,
  Input,
  Text,
  Row,
  ListContainer,
} from './styled-components';
import { Link } from 'react-router-dom';
import { IconNames } from '@blueprintjs/icons';
import { Icon } from '@blueprintjs/core';

const FiveDay = () => {
  const [text, setText] = useState('');
  const [weatherList, setWeatherList] = useState([]);
  const [saveList, setSaveList] = useState([]);

  const handleTextChange = e => {
    setText(e.target.value);
  };

  // spread operator to copy weather list items to new array and add text value. array starts empty.
  // clear input box on submit
  const addWeather = () => {
    setWeatherList([...weatherList, text]);
    setText('');
  };

  // remove item from list, and only that value if there is a duplicate (by index)
  const deleteWeather = index => {
    const array = weatherList.filter((_, i) => i !== index);
    setWeatherList(array);
  };

  // add list to side of page, reset list to empty array and text to empty string in input
  const handleSaveList = () => {
    setSaveList(weatherList);
    setWeatherList([]);
    setText('');
  };

  return (
    <Container>
      <Link to="/">
        <Button color="red">Home</Button>
      </Link>
      <Link to="/character">
        <Button color="red">Character</Button>
      </Link>
      <InnerContainer color="black">
        <Title>Five Day Weather</Title>
      </InnerContainer>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '50px',
          }}
        >
          <Input
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder="Weather"
          />

          {/* conditional render to show button if text value exits */}
          {text && (
            <Button
              type="submit"
              padding="5px 5px"
              marginLeft="10px"
              onClick={addWeather}
            >
              Add
            </Button>
          )}
        </div>

        {/* conditional render to show list if it has at least one value */}
        {saveList.length > 0 && (
          <ListContainer>
            {saveList.map((item, index) => (
              <Row key={index}>
                <Text>{item}</Text>
              </Row>
            ))}
          </ListContainer>
        )}
      </div>

      {/* conditional render to show button if list length has at least one value */}
      {weatherList.length > 0 && (
        <Button marginBottom="50px" onClick={handleSaveList}>
          Save
        </Button>
      )}

      {weatherList.map((item, index) => (
        <Row key={index}>
          <Text>{item}</Text>
          <Button
            marginLeft="10px"
            padding="5px"
            onClick={() => deleteWeather(index)}
          >
            <Icon icon={IconNames.TRASH} />
          </Button>
        </Row>
      ))}
    </Container>
  );
};

export default FiveDay;

// this will work the same as above just written as a class component.

// class FiveDay extends Component {
//   constructor() {
//     super();

//     this.state = {
//       text: '',
//       weatherList: [],
//       saveList: [],
//     };
//   }

//   handleTextChange = e => {
//     this.setState({
//       text: e.target.value,
//     });
//   };

//   addWeather = () => {
//     this.state.weatherList.push(this.state.text);
//     this.setState({
//       weatherList: this.state.weatherList,
//       text: '',
//     });
//   };

//   deleteWeather = index => {
//     let array = this.state.weatherList.filter((_, i) => i !== index);
//     this.setState({
//       weatherList: array,
//     });
//   };

//   handleSaveList = () => {
//     this.setState({
//       saveList: this.state.weatherList,
//       weatherList: [],
//       text: '',
//     });
//   };

//   render() {
//     return (
//       <Container>
//         <Link to="/">
//           <Button color="red">Home</Button>
//         </Link>
//         <InnerContainer color="black">
//           <Title>Five Day Weather</Title>
//         </InnerContainer>

//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-evenly',
//             width: '100%',
//           }}
//         >
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               marginBottom: '50px',
//             }}
//           >
//             <Input
//               type="text"
//               onChange={this.handleTextChange}
//               value={this.state.text}
//               placeholder="Weather"
//             />

//             {this.state.text && (
//               <Button
//                 padding="5px 5px"
//                 marginLeft="10px"
//                 onClick={this.addWeather}
//               >
//                 Add
//               </Button>
//             )}
//           </div>

//           {this.state.saveList.length > 0 && (
//             <ListContainer>
//               {this.state.saveList.map((item, index) => (
//                 <Row key={index}>
//                   <Text>{item}</Text>
//                 </Row>
//               ))}
//             </ListContainer>
//           )}
//         </div>

//         {this.state.weatherList.length > 0 && (
//           <Button marginBottom="50px" onClick={this.handleSaveList}>
//             Save
//           </Button>
//         )}

//         {this.state.weatherList.map((item, index) => (
//           <Row key={index}>
//             <Text>{item}</Text>
//             <Button
//               marginLeft="10px"
//               padding="5px"
//               onClick={() => this.deleteWeather(index)}
//             >
//               X
//             </Button>
//           </Row>
//         ))}
//       </Container>
//     );
//   }
// }

// export default FiveDay;
