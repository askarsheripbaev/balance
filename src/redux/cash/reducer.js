import {ADD_CASH, DELETE_CASH, GET_CASH} from "./action";

const initialState = {
   cash: 0
}

export const cashReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CASH:
         return {
            ...state,
            cash: state.cash + action.payload
         }
      case GET_CASH:
         return {
            ...state,
            cash: state.cash - action.payload
         }
      case DELETE_CASH:
         return {
            ...state,
            cash: 0
         }
      default:
         return state
   }
}