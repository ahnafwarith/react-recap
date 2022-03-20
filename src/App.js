import logo from './logo.svg';
import './App.css';

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
  backgroundColor: 'yellow',
  borderRadius: '20px',
  margin: '20px'
};

function Person(props) {
  return (
    <div style={style}>
      <h1>Name: {props.name}</h1>
      <p>Job: {props.job}</p>
    </div>
  )
}

export default App;
