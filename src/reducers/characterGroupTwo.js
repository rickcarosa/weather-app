import { combineReducers } from 'redux';

const getGroupTwoCharacters = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_GROUP_TWO_FULFILLED':
      return action.payload.data.results;
    case 'FETCH_CHARACTER_GROUP_TWO_REJECTED':
      return [];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_GROUP_TWO_PENDING':
      return true;
    case 'FETCH_CHARACTER_GROUP_TWO_REJECTED':
    case 'FETCH_CHARACTER_GROUP_TWO_FULFILLED':
      return false;
    default:
      return state;
  }
};

const characterGroupTwo = combineReducers({
  getGroupTwoCharacters,
  isFetching,
});

export default characterGroupTwo;
