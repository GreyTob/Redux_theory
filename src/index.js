import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'

// function loggerMiddlewear(store) {
//   return function (next) {
//     return function (action) {
//       //продолжим цепочку выполнения dispatch'ей в store
//       const result = next(action)
//       console.log('middlewear', store.getState())
//       return result
//     }
//   }
// }

//тоже самое но с es6 синтаксисом
const loggerMiddlewear = (store) => (next) => (action) => {
  const result = next(action)
  console.log('middlewear', store.getState())
  return result
}

//в applyMiddleware передаются Middleware'ы, которые мы хотим использовать
const store = createStore(rootReducer, applyMiddleware(loggerMiddlewear))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
