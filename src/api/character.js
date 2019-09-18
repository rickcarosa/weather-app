import axios from 'axios';

const URL = 'https://swapi.co/api/people/1/';

export const fetchCharacter = () => {
  return axios.get(URL).then(res => res);
};
