import React, {useState, useEffect} from 'react';
import './App.css';

function App(props) {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));
  const [amount] = useState(props.startAmount);
  
  useEffect(() => {
    localStorage.setItem("count",count);
  },[count]);

  return (
    <div className="App">
      <h1>Exercise 1</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+amount)}>+{amount}</button>
      <button onClick={() => setCount(count-amount)}>-{amount}</button>
    </div>
  );
}

export default App;
