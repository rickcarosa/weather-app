import React, { useEffect } from 'react';
// import React, { Component } from 'react';
import { Container, Button, InnerContainer, Text } from './styled-components';
import { fetchCharacter } from '../actions/character';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CharacterBase = ({ fetchCharacter, character }) => {
  useEffect(() => {
    if (character.length === 0) {
      fetchCharacter();
    }
  });

  return (
    <Container>
      <Link to="/">
        <Button color="red">Home</Button>
      </Link>
      <InnerContainer>
        <Text padding="20px">{character.name}</Text>
      </InnerContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  character: state.character.getCharacter,
});

const Character = connect(
  mapStateToProps,
  { fetchCharacter }
)(CharacterBase);

export default Character;

// class Character extends Component {
//   componentDidMount() {
//     this.props.fetchCharacter();
//   }
//   render() {
//     return <Container>{this.props.character.name}</Container>;
//   }
// }

// const mapStateToProps = state => ({
//   character: state.character.getCharacter,
// });

// Character = connect(
//   mapStateToProps,
//   { fetchCharacter }
// )(Character);

// export default Character;
