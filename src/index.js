import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

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
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddlewear, reduxThunk))
)

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
