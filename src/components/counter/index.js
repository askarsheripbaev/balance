import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterReducer} from "../../redux/counter/reducer";

const CounterApp = () => {
   const stateCounter = useSelector(state => state.counterReducer.counter)
   const dispatch = useDispatch()
   const handleIncrementCounter = () => {
      dispatch({
         type:'INCREMENT_COUNTER'
      })
   }

   const handleDecrementCounter = () => {
      dispatch({
         type: 'DECREMENT_COUNTER'
      })
   }
   return (

       <div>
          <button onClick={handleIncrementCounter}>+</button>
          {stateCounter}
          <button onClick={handleDecrementCounter}>-</button>
       </div>
   );
};

export default CounterApp;