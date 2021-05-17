import { ADD, ADD_NUMBER, ADD_TEN, SUB, SUB_TEN } from '../actions/actionTypes'

//начальное состояние state
const initialState = {
  counter1: 0,
}

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case ADD:
      //обязательно возвращаться должен новый объект, не мутировать state
      return {
        counter1: state.counter1 + 1,
      }
    case SUB:
      return {
        counter1: state.counter1 - 1,
      }
    case ADD_TEN:
      return {
        counter1: state.counter1 + 10,
      }
    case SUB_TEN:
      return {
        counter1: state.counter1 - 10,
      }
    case ADD_NUMBER:
      return {
        counter1: state.counter1 + action.payload,
      }
    default:
      return state
  }
}
