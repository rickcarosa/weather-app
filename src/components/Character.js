import React, { useEffect } from 'react';
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

const CharacterBase = ({
  fetchCharacterGroupOne,
  fetchCharacterGroupTwo,
  groupOne,
  groupTwo,
  isFetchingGroupOne,
  isFetchingGroupTwo,
}) => {
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

  return (
    <Container>
      <Link to="/">
        <Button color="red">Home</Button>
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
            </ListContainer>
            <ListContainer>
              {groupTwo.map((item, index) => (
                <Row key={index}>
                  <Text>{item.name}</Text>
                </Row>
              ))}
            </ListContainer>
          </div>
        )}
      </InnerContainer>
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
