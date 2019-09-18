import { combineReducers } from 'redux';

const getGroupOneCharacters = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_GROUP_ONE_FULFILLED':
      return action.payload.data.results;
    case 'FETCH_CHARACTER_GROUP_ONE_REJECTED':
      return [];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTER_GROUP_ONE_PENDING':
      return true;
    case 'FETCH_CHARACTER_GROUP_ONE_REJECTED':
    case 'FETCH_CHARACTER_GROUP_ONE_FULFILLED':
      return false;
    default:
      return state;
  }
};

const characterGroupOne = combineReducers({
  getGroupOneCharacters,
  isFetching,
});

export default characterGroupOne;
