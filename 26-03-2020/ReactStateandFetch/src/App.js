import React, { useState, useEffect } from 'react';
import CountryTable from "./CountryTable";
import countryFacade from './countryFacade';
import './App.css';

const App = ({factory}) => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      factory.getLabels(setLabels);
      factory.getCountries(setCountries);
    },3000);
    return function cleanup() {
      clearInterval(updateInterval);
    }
  },[]);

  return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div className="App-intro">          
          <CountryTable labels={labels} countries={countries}/>
        </div>
      </div>
    );
};


export default App;
