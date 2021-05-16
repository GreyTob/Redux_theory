//начальное состояние state
const initialState = {
  counter2: 220,
}

export default function counter2(state = initialState, action) {
  switch (action.type) {
    case 'ADD2':
      //обязательно возвращаться должен новый объект, не мутировать state
      return {
        counter2: state.counter2 + action.payload,
      }

    default:
      return state
  }
}
