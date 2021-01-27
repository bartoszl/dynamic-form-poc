import React, { useEffect } from 'react';
import data from './response';
import Form from './Form';

function App() {
  // We will be fetching schema here, we need to provide it before we render form!!!!
  useEffect(() => {
    console.log('fetchSchema');
  }, []);

  // if(!schema) return null;

  return (
    <Form schema={data.data} />
  );
}

export default App;
