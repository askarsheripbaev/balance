import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, deleteCashAction, getCashAction} from "../../redux/cash/action";

const Balance = () => {
   const cashState = useSelector(state => state.cashReducer.cash)
   const dispatch = useDispatch()


   const addCash = (amount) => {
      dispatch(addCashAction(amount))
   }
   const getCash = (amount) => {
      dispatch(getCashAction(amount))
   }

   const deleteCash = (amount) => {
      dispatch(deleteCashAction(amount))
   }




   return (
       <div>
         balance - {cashState}
          <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
          <button onClick={() => getCash(Number(prompt()))}>Снять</button>
          <button onClick={() => deleteCash()}>Delete</button>
       </div>
   );
};

export default Balance;