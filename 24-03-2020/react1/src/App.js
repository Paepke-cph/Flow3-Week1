import React from 'react';
import './App.css';

import upper, {text1,text2,text3} from "./file1"

function App() {
  return (
    <div className="App">
      <h1>Exercise 1</h1>
      <p>{upper("Please uppercase me!")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  );
}

export default App;
