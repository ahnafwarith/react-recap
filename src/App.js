import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Person name={'JhankuSir'} job={'Teaching'}></Person>
      <Person name={'Samiha'} job={'Bebu'}></Person>
      <Person name={'Ahnaf'} job={'Developer'}></Person>
      <Users></Users>
    </div>
  );
}

function Users() {
  const [users, handleUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => handleUsers(data))
  }, [])

  return (
    <div>
      <h1>Users amount: {users.length}</h1>
      {
        /* Taking each user element individually from users data and dynamically sending */
        users.map(user => <User userInfo={user}></User>)
      }
    </div>
  )
};

function User(props) {
  console.log(props)
  return (
    <div style={{
      backgroundColor: 'lightcyan' /* Applying css style directly with JavaScript */
    }}>
      <h1>ID:{props.userInfo.id}</h1><p>Name:{props.userInfo.name}</p>
    </div>
  )
}

const style = { /* Applying style by storing the css data in a variable */
  backgroundColor: 'bisque',
  borderRadius: '20px',
  margin: '20px',
  padding: '20px'
};

function Person(props) {
  const [age, handleAge] = useState(0);
  const increaseAge = () => {
    const newAge = age + 1;
    handleAge(newAge); /* Sending the new age to hook */
  }
  return (
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <p>Job: {props.job}</p>
      <p>Age: {age}</p>
      <button onClick={increaseAge/* Not calling function here as it will call the function even if button is not clicked */}>Increase Age</button>
    </div>
  )
}

export default App;
