import React, {useState} from "react";
import './App.css';
import {useSelector} from "react-redux";
import CounterApp from "./components/counter";
import Balance from "./components/balance";

function App() {
//Use State example
   const [counter, setCounter] = useState(0)

   const handleIncrementCounter = () => {
      setCounter(prev => prev + 1)
   }

   const handleDecrementCounter = () => {
      setCounter(prev => prev - 1)
   }
  return (
    <div className="App">
       <p>React Component</p>

       <button onClick={handleIncrementCounter}>+</button>
       {counter}
       <button onClick={handleDecrementCounter}>-</button>
       <p>Redux Component</p>
       <CounterApp />
       <p>------------------</p>
       <Balance />
       <p>------------------</p>
    </div>
  );
}

export default App;
