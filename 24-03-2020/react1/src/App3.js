import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import person, {names, testNames} from './file2'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
Welcome.propTypes = {
    name: PropTypes.string.isRequired
};

function WelcomePerson({person}) {
    return (
        <div>
            <h1>First Name: {person.firstName}</h1>
            <h1>Last Name: {person.lastName}</h1>
            <h1>Email: {person.email}</h1>
        </div>
    );
}

WelcomePerson.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

function App3() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            {names.map(aPerson => <WelcomePerson person={aPerson}/>)}
        </div>
    );
}

export default App3;
  