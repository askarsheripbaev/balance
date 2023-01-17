// action
export const ADD_CASH = 'ADD_CASH'
export const GET_CASH = 'GET_CASH'

export const DELETE_CASH = 'DELETE_CASH'

// action creator
export const addCashAction = (payload) => ({
   type: ADD_CASH,
   payload: payload
})

export const getCashAction = (payload) => ({
   type: GET_CASH,
   payload: payload
})

export const deleteCashAction = (payload) => ({
   type: DELETE_CASH,
   payload: payload
})