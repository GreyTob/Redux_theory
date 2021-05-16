//начальное состояние state
const initialState = {
  counter: 0,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      //обязательно возвращаться должен новый объект, не мутировать state
      return {
        counter: state.counter + 1,
      }
    case 'SUB':
      return {
        counter: state.counter - 1,
      }
    case 'ADD_TEN':
      return {
        counter: state.counter + 10,
      }
    case 'SUB_TEN':
      return {
        counter: state.counter - 10,
      }
    case 'ADD_NUMBER':
      return {
        counter: state.counter + action.payload,
      }
    default:
      return state
  }
}
