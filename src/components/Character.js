import React, { useEffect } from 'react';
// import React, { Component } from 'react';
import { Container } from './styled-components';
import { fetchCharacter } from '../actions/character';
import { connect } from 'react-redux';

const CharacterBase = ({ fetchCharacter, character }) => {
  useEffect(() => {
    if (character.length === 0) {
      fetchCharacter();
    }
  });

  return <Container>{character.name}</Container>;
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
