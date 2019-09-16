import React from 'react';
import publications from '../assets/publications.json';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <div>
      <Reader items={publications} />,
    </div>
  );
};

export default App;
