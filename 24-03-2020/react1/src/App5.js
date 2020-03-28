import React, {useState} from 'react';
import './App.css';

function MemberRow(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.age}</td>
    </tr>;
}

function MemberTable({ members }) {
    const rowData = members.map((member,index) => 
        <MemberRow key={index} name={member.name} age={member.age}/>
    );
    return (
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
            </tr>
        </thead>
        <tbody>{rowData}</tbody>
      </table>
    );
}
   
function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props.members}/>
        </div>
    );
}
   
export default function App() {
    const initialMembers = [{name : "Peter", age: 18},
                            {name : "Jan", age: 35},
                            {name : "Janne", age: 25},
                            {name : "Martin", age: 22}];
    const [members,setMembers] = useState(initialMembers);
    return (<MemberDemo members={members} />);
}

const questions = `
    (Q): What is the purpose of the key value, which must be given to individual rows in a react-list ?
    (A): This is for the sake of React, when rendering. The keys are for react to identify which element (fx. a row in a table) needs to be updated.

    (Q): It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?
    (A): When calling the map function on an array, we can pass in a callback function and optionally an index (see line 12) where we take the index of the current element in the array.

    (Q): What is the difference(s) between state and props?
    (A): State is owned locally and updated by the given component itself - whereas Props is owned by a parent component and is therefore read-only.

    (Q): For which scenarios would you use props, and for which would you use state?
    (A):

    (Q): Where is the only place you can set state directly as in:  this.state = {name: "Peter"};?
    (A):

    (Q): How must you set state all other places?
    (A):
`;