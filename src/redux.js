const redux = require('redux')

//начальный state, описывающий све приложение
const initialState = {
  counter: 0,
}

//reducer
const reduser = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return {
      counter: state.counter + 1,
    }
  }

  if (action.type === 'SUB') {
    return {
      counter: state.counter - 1,
    }
  }

  if (action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter - action.value,
    }
  }

  return state //reducer всегда должен возвращать новый state
}

//store тут храняться все данные приложенеия. В createStort(передается reducer без вызова)
const store = redux.createStore(reduser)
//console.log(store.getState())//0 - начальное состояние state

//подписаться на изменения state
store.subscribe(() => {
  console.log('Subscribe: ', store.getState())
})

//actions изметяет состояние стора
const addCounter = {
  type: 'ADD', //поле type обязательно
}

store.deispatch(addCounter)
//console.log(store.getState())//1 - добавили 1

store.deispatch({ type: 'SUB' })
//console.log(store.getState())//0 - вычли 1

store.deispatch({ type: 'ADD_NUMBER', value: 10 })
//console.log(store.getState())//10 - добавили value
