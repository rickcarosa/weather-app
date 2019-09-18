import * as api from '../api/character';

export const fetchCharacter = () => ({
  type: 'FETCH_CHARACTER',
  payload: api.fetchCharacter(),
});
