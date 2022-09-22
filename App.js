import React from 'react';
import './App.css';

function App() {
  const userName = 'Александр'

  return (
    <div className="App">
      <Message name = {userName} id={1}/>
    </div>
  );
}

export default App;

const Message = ({theme}) => {

   return(
    <div style={{opacity: '0.4'}}>
      <h1>Привет, Александр</h1>
    </div>
  );
}