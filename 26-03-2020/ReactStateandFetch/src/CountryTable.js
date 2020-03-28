import React from "react";

const CountryTable = (props) => {

  const createTableHead = labels => {
    return labels.map((label,index) => {
      return <td key={index}>{label}</td>
    });
  }

  const short = input => {
    if(Array.isArray(input)){
      let length = input.length;
      return length > 1 ? 
              input[0] + " (+"+length+")" :
              input;
    } else {
      return input;
    }
  };

  const createTableBody = countries => {
    return countries.map((country,index) => {
      return(
        <tr key={index}>
          <td>{short(country.name)}</td>
          <td>{short(country.capital)}</td>
          <td>{short(country.region)}</td>
          <td>{short(country.population)}</td>
          <td>{short(country.area)}</td>
          <td>{short(country.timezones)}</td>
          <td>{short(country.borders)}</td>
          <td>{short(country.topLevelDomain)}</td>
          <td>{short(country.currencies)}</td>
          <td>{short(country.languages)}</td>
        </tr>
      );
    })
  }

  return (
      <div> 
      <table className="table">
        <thead>
          <tr>
            {createTableHead(props.labels)}
          </tr>
        </thead> 
        <tbody>
          {createTableBody(props.countries)}
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;