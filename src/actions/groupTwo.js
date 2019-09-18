import * as api from '../api/groupTwo';

export const fetchCharacterGroupTwo = () => ({
  type: 'FETCH_CHARACTER_GROUP_TWO',
  payload: api.fetchCharacterGroupTwo(),
});