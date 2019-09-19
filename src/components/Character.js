import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import {
  Container,
  Button,
  InnerContainer,
  Text,
  ListContainer,
  Row,
} from './styled-components';
import { fetchCharacterGroupOne } from '../actions/groupOne';
import { fetchCharacterGroupTwo } from '../actions/groupTwo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';

const Chosen = ({ choice, choiceTwo, getWinner }) => {
  return (
    <>
      {(choice.length > 0 || choiceTwo.length > 0) && (
        <InnerContainer color="black" padding="2rem">
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Text>{choice}</Text>
            {choice.length > 0 && choiceTwo.length > 0 && (
              <Button onClick={getWinner}>FIGHT</Button>
            )}
            <Text>{choiceTwo}</Text>
          </div>
        </InnerContainer>
      )}
    </>
  );
};

const Winner = ({ winner, resetGame }) => {
  return (
    <InnerContainer padding="0 0 1rem 0">
      <Text padding="2rem">WINNER</Text>
      <Text padding="0 0 1rem 0">{winner}!</Text>
      <Button onClick={resetGame}>RESET</Button>
    </InnerContainer>
  );
};

const CharacterBase = ({
  fetchCharacterGroupOne,
  fetchCharacterGroupTwo,
  groupOne,
  groupTwo,
  isFetchingGroupOne,
  isFetchingGroupTwo,
}) => {
  const [choice, setChoice] = useState('');
  const [choiceTwo, setChoiceTwo] = useState('');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (groupOne.length === 0) {
      fetchCharacterGroupOne();
    }
  });
  useEffect(() => {
    if (groupTwo.length === 0) {
      fetchCharacterGroupTwo();
    }
  });

  const chooseGroupOneCharacter = () => {
    // console.log(
    //   typeof groupOne[Math.floor(Math.random() * groupOne.length)].name
    // );
    setChoice(groupOne[Math.floor(Math.random() * groupOne.length)].name);
  };

  const chooseGroupTwoCharacter = () => {
    setChoiceTwo(groupTwo[Math.floor(Math.random() * groupTwo.length)].name);
  };

  const getWinner = () => {
    let array = [];
    array.push(choice, choiceTwo);
    setWinner(array[Math.floor(Math.random() * array.length)]);
  };

  const resetGame = () => {
    setChoice('');
    setChoiceTwo('');
    setWinner('');
  };

  return (
    <Container>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/five-day">
        <Button>Five Day</Button>
      </Link>
      <InnerContainer padding="2rem">
        {isFetchingGroupOne && isFetchingGroupTwo && <Spinner />}
        {!isFetchingGroupOne && !isFetchingGroupTwo && (
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <ListContainer>
              {groupOne.map((item, index) => (
                <Row key={index}>
                  <Text>{item.name}</Text>
                </Row>
              ))}
              <Button onClick={chooseGroupOneCharacter}> Choose </Button>
            </ListContainer>
            <ListContainer>
              {groupTwo.map((item, index) => (
                <Row key={index}>
                  <Text>{item.name}</Text>
                </Row>
              ))}
              <Button onClick={chooseGroupTwoCharacter}> Choose </Button>
            </ListContainer>
          </div>
        )}
      </InnerContainer>

      <Chosen choice={choice} choiceTwo={choiceTwo} getWinner={getWinner} />

      {winner && <Winner winner={winner} resetGame={resetGame} />}
    </Container>
  );
};

const mapStateToProps = state => ({
  groupOne: state.characterGroupOne.getGroupOneCharacters,
  groupTwo: state.characterGroupTwo.getGroupTwoCharacters,

  isFetchingGroupOne: state.characterGroupOne.isFetching,
  isFetchingGroupTwo: state.characterGroupTwo.isFetching,
});

const Character = connect(
  mapStateToProps,
  { fetchCharacterGroupOne, fetchCharacterGroupTwo }
)(CharacterBase);

export default Character;
