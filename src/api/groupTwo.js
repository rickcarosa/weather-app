import axios from 'axios';

const URL = 'https://swapi.co/api/people/?page=2';

export const fetchCharacterGroupTwo = () => {
  return axios.get(URL).then(res => res);
};
