import React from 'react'
import { connect } from 'react-redux'
import classes from './App.module.scss'
import Counter from './Counter'
import {
  add,
  add_number,
  add_ten,
  sub,
  sub_ten,
  Async_Add,
} from './redux/actions/actions'

class App extends React.Component {
  updateCounter(num) {
    // this.setState({
    //   counter: this.props.counter + num,
    // })
  }
  render() {
    // console.log('APP', this.props)
    return (
      <div className={classes.App}>
        <div className={classes.counter}>{this.props.counter1}</div>
        <hr />
        <div className={classes.Actions}>
          <button onClick={this.props.onAdd}>добавить 1</button>
          <button onClick={this.props.onAddTen}>добавить 10</button>
          <button onClick={this.props.onSubTen}>вычесть 10</button>
          <button onClick={this.props.onSub}>вычесть 1</button>
        </div>

        <div className={classes.Actions}>
          {/* передать нужное число в колбэк функцию или методом bind */}
          <button onClick={() => this.props.onAddNember(15)}>
            добавить 15
          </button>
          <button onClick={() => this.props.onAddNember(-16)}>
            вычесть 16
          </button>

          <button onClick={() => this.props.onAsyncAdd(100)}>
            асинхронно добавить 100
          </button>

          <Counter />
        </div>
      </div>
    )
  }
}

//функции, передающиеся в connect(создаются полте того как определен class)
function mapStateToProps(state) {
  // console.log('app state', state)
  return {
    counter1: state.counter1.counter1, //теперь данное поле counter в App можно использовать как props
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //функция которая добавляет новый action
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddTen: () => dispatch(add_ten()),
    onSubTen: () => dispatch(sub_ten()),
    //добавить кастомное число (в payload)
    onAddNember: (number) => dispatch(add_number(number)),

    //асинхронно
    onAsyncAdd: (number) => dispatch(Async_Add(number)),
  }
}

//connect коннект возвращает функцию в которую затем вкладывается компонент
export default connect(mapStateToProps, mapDispatchToProps)(App)
