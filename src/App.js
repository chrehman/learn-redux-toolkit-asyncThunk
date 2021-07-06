import React from 'react';
import Room from './Room.js';
import './App.css';
import Counter from './Components/Counter.js';
import CounterDisplay from './Components/CounterDisplay.js';
import MirageServer from './mirage/index.js';

function App() {

  MirageServer()
    return(
      <div>
      <Counter/>
      <CounterDisplay/>
      </div>
    );
}

export default App;
