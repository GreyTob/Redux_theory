//action-creators -функция которая создает(возвращает)  action

import { ADD, SUB, ADD_TEN, SUB_TEN, ADD_NUMBER, ADD2 } from './actionTypes'

export function add() {
  return {
    type: ADD,
  }
}

export function sub() {
  return {
    type: SUB,
  }
}

export function add_ten() {
  return {
    type: ADD_TEN,
  }
}

export function sub_ten() {
  return {
    type: SUB_TEN,
  }
}

export function add_number(number) {
  return {
    type: ADD_NUMBER,
    payload: number,
  }
}

export function add2(number) {
  return {
    type: ADD2,
    payload: number,
  }
}

//redux-thunk позволяет вместо обычного объекта вернуть новую функцию в кот можно запускать код асинхронно
//эта функция принимает dispatch в который можно положить action-creator
export function Async_Add(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add_number(number))
    }, 3000)
  }
  // return {
  //   type: ASYNC_ADD,
  //   payload: number,
  // }
}
