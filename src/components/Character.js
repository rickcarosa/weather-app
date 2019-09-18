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
import { fetchCharacterGroupOne } from '../actions/character';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';

const CharacterBase = ({ fetchCharacterGroupOne, character, isFetching }) => {
  useEffect(() => {
    if (character.length === 0) {
      fetchCharacterGroupOne();
    }
  });

  return (
    <Container>
      <Link to="/">
        <Button color="red">Home</Button>
      </Link>
      <InnerContainer padding="2rem">
        {isFetching && <Spinner />}
        {!isFetching && (
          <ListContainer>
            {character.map((item, index) => (
              <Row key={index}>
                <Text>{item.name}</Text>
              </Row>
            ))}
          </ListContainer>
        )}
      </InnerContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  character: state.characterGroupOne.getCharacters,
  isFetching: state.characterGroupOne.isFetching,
});

const Character = connect(
  mapStateToProps,
  { fetchCharacterGroupOne }
)(CharacterBase);

export default Character;
