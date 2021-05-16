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
    case 'TEN':
      return {
        counter: state.counter + 10,
      }
    case 'SUBTEN':
      return {
        counter: state.counter - 10,
      }
  }

  return state
}
