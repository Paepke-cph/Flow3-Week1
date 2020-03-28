import React, {useState,useEffect} from 'react';
import './App.css';

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList({ numbers }) {
    const listItems = numbers.map(number => 
        <ListItem key={number.toString()} value={number}/>
    );
    return <ul>{listItems}</ul>;
}

function RowItem(props) {
    return <tr><td>{props.value}</td></tr>;
}

function NumberTable({numbers}) {
    const rowItems = numbers.map(number =>
        <RowItem key={number.toString()} value={number}/>
    );
    return(
    <table>
        <thead>
            <tr>
                <td>Number</td>
            </tr>
        </thead>
        <tbody>{rowItems}</tbody>
    </table>
    );
}

function App(props) {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);

    useEffect(() => {
        const updateInterval = setInterval(() => {
            const randomNumber = Math.floor(Math.random()* 1000)+1;
            let newNumbers = [...numbers,randomNumber];
            setNumbers(newNumbers);
        }, 5000);
        return function cleanup() {
            clearInterval(updateInterval);
        }
    });

    return (
        <div>
            <h2>(LIST) All numbers passed in via props</h2>
            <NumberList numbers={numbers} />

            <h2>(TABLE) All numbers passed in via props</h2>
            <NumberTable numbers={numbers}/>
        </div>
    );
}
export default App;