import React from 'react'
import classes from './App.module.scss'

class App extends React.Component {
  state = {
    counter: 0,
  }

  updateCounter(num) {
    this.setState({
      counter: this.state.counter + num,
    })
  }
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.counter}>{this.state.counter}</div>
        <hr />
        <div className={classes.Actions}>
          <button onClick={() => this.updateCounter(1)}>добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>вычесть 1</button>
        </div>
      </div>
    )
  }
}

export default App
