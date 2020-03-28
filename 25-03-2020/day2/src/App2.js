import React, {useState, useEffect} from 'react';
import './App.css';

function App(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeUpdate = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    },1000);

    return  function cleanup(){
        clearInterval(timeUpdate);
    };
  });

  return (
    <div className="App">
      <h1>Exercise 2</h1>
      <p>Current Time: {time}</p>
    </div>
  );
}

export default App;
