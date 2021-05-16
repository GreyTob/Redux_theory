import React from 'react'
import { connect } from 'react-redux'
import classes from './App.module.scss'

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
        <div className={classes.counter}>{this.props.counter}</div>
        <hr />
        <div className={classes.Actions}>
          <button onClick={this.props.onAdd}>добавить 1</button>
          <button onClick={this.props.onTen}>добавить 10</button>
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
        </div>
      </div>
    )
  }
}

//функции, передающиеся в connect(создаются полте того как определен class)
function mapStateToProps(state) {
  return {
    counter: state.counter, //теперь данное поле counter в App можно использовать как props
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //функция которая добавляет новый action
    onAdd: () => dispatch({ type: 'ADD' }),
    onSub: () => dispatch({ type: 'SUB' }),
    onTen: () => dispatch({ type: 'ADD_TEN' }),
    onSubTen: () => dispatch({ type: 'SUB_TEN' }),
    //добавить кастомное число (в payload)
    onAddNember: (number) => dispatch({ type: 'ADD_NUMBER', payload: number }),
  }
}

//connect коннект возсращает функцию в которую затем вкладывается компонент
export default connect(mapStateToProps, mapDispatchToProps)(App)
