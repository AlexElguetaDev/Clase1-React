import React from 'react';

const ListOfClicks = ({ clic }) => {
  return <p>{clic.join(', ')}</p>;
};

export default ListOfClicks;
