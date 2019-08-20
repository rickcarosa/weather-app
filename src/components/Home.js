import React from 'react';
import FiveDay from './FiveDay';

const Home = props => {
  return <FiveDay baseUrl={props.baseUrl} />;
  // return <FiveDay {...props} />;
};

export default Home;
