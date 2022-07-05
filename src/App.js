import React from 'react';
import Title from './comps/Title';
import { cityData } from './firebase';

function App() {
  
  cityData.then(res => console.log(res))
  return (
    <div className="App">
      <Title/>
    </div>
  );
}

export default App;
