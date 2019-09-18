import axios from 'axios';

const URL = 'https://swapi.co/api/people/?page=1';

export const fetchCharacterGroupOne = () => {
  return axios.get(URL).then(res => res);
};
