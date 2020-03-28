//Add imports here

let URL = "http://localhost:3333";

const countryFacade = () => {
  function makeOptions(method, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
  
  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }
  
  const getLabels = (callback) => {
    let options = makeOptions("GET");
    fetch(URL+"/labels",options).then(handleHttpErrors).then(data => callback(data));  
  }

  const getCountries = (callback) => {
    fetch(URL+"/countries").then(handleHttpErrors).then(data => callback(data));
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();