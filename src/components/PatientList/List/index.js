import React from 'react';
import Item from './Item';

const List = ({
  patients
}) => {
  return (
    patients.map((patient, i) => (
      <Item key={i} patient={patient} />
    ))
  );
};

export default List;
