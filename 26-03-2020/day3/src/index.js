import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';

let app = <App startCount={10} startAmount={2}/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/" className="x" id="app1">Exercise 1</a> &nbsp;
         <a href="/" className="x" id="app2">Exercise 2</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App/>; break;
        case "app2": app = <App2/>; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));