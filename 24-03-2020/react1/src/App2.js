import React from 'react';
import './App.css';
import person, { males, females } from "./file2"

const {firstName, email} = person;

const personV2 = {...person,phone:123456,friends:[...males,...females]};

function App2() {
    console.log(...males,"Kurt",...females,"Tina");
    console.log(personV2);
    return (
    <div className="App">
        <h1>Exercise 2</h1>
        <p>Name: {firstName}, E-mail: {email}</p>
    </div>
  );
}

export default App2;
