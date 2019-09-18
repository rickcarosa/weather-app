import { combineReducers } from 'redux';

const getCharacter = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_FULFILLED':
      return action.payload.data;
    case 'FETCH_CHARACTER_REJECTED':
      return [];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_PENDING':
      return true;
    case 'FETCH_CHARACTER_REJECTED':
    case 'FETCH_CHARACTER_FULFILLED':
      return false;
    default:
      return state;
  }
};

const character = combineReducers({
  getCharacter,
  isFetching,
});

export default character;
