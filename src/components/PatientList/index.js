import React from 'react';
import ItemsGroup from './ItemsGroup';

const PatientList = ({
  patientGroups
}) => {
  return Object.entries(patientGroups).map(([groupBy, patients]) => (
    <ItemsGroup key={groupBy} title={groupBy} patients={patients} />
  ));
};

export default PatientList;
