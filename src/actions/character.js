import * as api from '../api/character';

export const fetchCharacterGroupOne = () => ({
  type: 'FETCH_CHARACTER_GROUP_ONE',
  payload: api.fetchCharacterGroupOne(),
});
