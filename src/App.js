import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Person name={'JhankuSir'} job={'Teaching'}></Person>
      <Person name={'Samiha'} job={'Bebu'}></Person>
      <Person name={'Ahnaf'} job={'Developer'}></Person>
    </div>
  );
}

const style = {
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
