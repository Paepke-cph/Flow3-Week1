import React, {useState,useEffect} from 'react';
import './App.css';

function App(props) {
    const [joke, setJoke] = useState("");
    const [dadJoke, setDadJoke] = useState("");


    const fetchChuckJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(data => {
            return data.json();
        })
        .then(result => {
            setJoke(result.value);
        });
    }

    const fetchDadJoke = () => {
        fetch("https://icanhazdadjoke.com", {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(data => {return data.json();})
        .then(result => {
            setDadJoke(result.joke);
        })
    }

    useEffect(() => {
        const jokeInterval = setInterval(() => {
            fetchDadJoke();
        },10000);

        return function cleanup() {
            clearInterval(jokeInterval);
        }
    });

    return (
        <div className="App">
            <h1>Exercise 3</h1>
            <p>Chuck Norris Joke: {joke}</p>
            <button onClick={fetchChuckJoke}>Get Random Joke</button>
            <p>Dad Joke: {dadJoke}</p>
        </div>
    );
}
export default App;