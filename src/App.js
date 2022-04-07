import React, { useMemo } from 'react';
import useFuse from 'react-use-fuse';
import Layout from './layout';
import PatientList from './components/PatientList';
import { PATIENTS_BY_DATE } from './constants';
import arrayToGroupObj from './utils/arrayToGroupObj';

const options = {
  keys: ['name']
}

function App() {
  const { result, search } = useFuse({
    data: PATIENTS_BY_DATE,
    options
  });

  const filteredPatientGroups = useMemo(() => {
    return arrayToGroupObj(result);
  }, [result]);

  return (
    <Layout onSearch={(e) => search(e.target.value)}>
      <PatientList patientGroups={filteredPatientGroups} />
    </Layout>
  );
}

export default App;
