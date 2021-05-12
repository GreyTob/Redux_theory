const redux = require('redux')

//начальный state, описывающий све приложение
const initialState = {
  counter: 0,
}

//reducer
const reduser = (state = initialState, action) => {
  return state //reducer всегда должен возвращать новый state
}

//store тут храняться все данные приложенеия. В createStort(передается reducer без вызова)
const store = redux.createStore(reduser)
console.log(store.getState())

//actions
