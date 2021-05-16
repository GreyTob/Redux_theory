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
          <button onClick={() => this.updateCounter(1)}>добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>вычесть 1</button>
        </div>
      </div>
    )
  }
}

//функции, передающиеся в connect
function mapStateToProps(state) {
  return {
    counter: state.counter, //теперь данное поле в App можно использовать как props, а не как стейт
  }
}

//connect коннект возсращает функцию в которую затем вкладывается компонент
export default connect(mapStateToProps)(App)
