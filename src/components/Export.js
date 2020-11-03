import React from 'react';
import { CSVLink } from 'react-csv';

const Export = () => {
  const headers = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Email', key: 'email' },
  ];

  const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
  ];

  // const headerNames = ['clientName', 'clientId'];

  //inside the component pass headernames list as a parameter

  // Array.from(headerNames, x => {return{label:x,key:x}}))

  //now you have automatically generates the header names for the cvs

  return (
    <div style={{ paddingLeft: '15rem', paddingTop: '10rem' }}>
      <CSVLink data={data} headers={headers}>
        Export
      </CSVLink>
    </div>
  );
};

export default Export;
