import React, { useState, useEffect } from 'react';
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
  Table,
  TableHeader,
  TableRow,
  TableData,
} from './styled-components';
import { Link } from 'react-router-dom';
import { IconNames } from '@blueprintjs/icons';
import { Icon, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { fetchCharacterGroupOne } from '../actions/groupOne';
import Pagination from './Pagination';
import AppToast from './Toast';

const TableHeaders = ['One', 'Two', 'Three', 'Four', 'Five'];
const Data = [1, 2, 3, 4, 5];

const FiveDay = ({ groupOne, fetchCharacterGroupOne }) => {
  const [text, setText] = useState('');
  const [weatherList, setWeatherList] = useState([]);
  const [saveList, setSaveList] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // useEffect(() => {
  //   fetchCharacterGroupOne().then(res => {
  //     // intents are PRIMARY, DANGER, SUCCESS, WARNING. blue, red, green, orange
  //     // this wouldn't go in the useEffect regularly. but error can be used in catch to show message from server
  //     AppToast.show({
  //       message: 'Found them!',
  //       intent: Intent.SUCCESS
  //     })
  //   }).catch(
  //     AppToast.show({
  //       message: "No Characters",
  //       intent: Intent.DANGER
  //     })
  //   )
  // }, [fetchCharacterGroupOne, perPage])

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // spread operator to copy weather list items to new array and add text value. array starts empty.
  // clear input box on submit
  const addWeather = () => {
    setWeatherList([...weatherList, text]);
    setText('');
  };

  // remove item from list, and only that value if there is a duplicate (by index)
  const deleteWeather = (index) => {
    const array = weatherList.filter((_, i) => i !== index);
    setWeatherList(array);
  };

  // add list to side of page, reset list to empty array and text to empty string in input
  const handleSaveList = () => {
    setSaveList(weatherList);
    setWeatherList([]);
    setText('');
  };

  const handleNumPerPageChange = (perPage) => {
    setPerPage(perPage.value);
    setPageCount(Math.ceil(groupOne.length / perPage.value));
  };

  return (
    <Container>
      <Link to='/'>
        <Button color='red'>Home</Button>
      </Link>
      <Link to='/character'>
        <Button color='red'>Character</Button>
      </Link>
      <InnerContainer color='black'>
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
            type='text'
            onChange={handleTextChange}
            value={text}
            placeholder='Weather'
          />

          {/* conditional render to show button if text value exits */}
          {text && (
            <Button
              type='submit'
              padding='5px 5px'
              marginLeft='10px'
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
        <Button marginBottom='50px' onClick={handleSaveList}>
          Save
        </Button>
      )}

      {weatherList.map((item, index) => (
        <Row key={index}>
          <Text>{item}</Text>
          <Button
            marginLeft='10px'
            padding='5px'
            onClick={() => deleteWeather(index)}
          >
            <Icon icon={IconNames.TRASH} />
          </Button>
        </Row>
      ))}

      <Table>
        <tbody>
          <TableRow>
            {TableHeaders.map((header, i) => (
              <TableHeader key={i}>{header}</TableHeader>
            ))}
          </TableRow>
          <TableRow>
            {Data.map((data, i) => (
              <TableData key={i}>{data}</TableData>
            ))}
          </TableRow>
        </tbody>
      </Table>
      <br />
      <br />
      <br />
      <Table>
        <tbody>
          {groupOne.map((name, i) => (
            <TableRow key={i}>
              <TableData>{name.name}</TableData>
              <TableData>{name.gender}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Pagination
        perPage={perPage}
        handleNumPerPageChange={handleNumPerPageChange}
        pageCount={pageCount}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  groupOne: state.characterGroupOne.getGroupOneCharacters,
});

export default connect(mapStateToProps, { fetchCharacterGroupOne })(FiveDay);

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
