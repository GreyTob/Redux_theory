import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
      <div style={{ padding: 20, border: '1px solid #ccc' }}>
        <h1>Counter {this.props.counter}</h1>
        <hr />
        <div>
          <button onClick={() => this.props.onAdd2(100)}>Add 100</button>
          <button onClick={() => this.props.onAdd2(-100)}>Sub -100</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter2.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd2: (number) => dispatch({ type: 'ADD2', payload: number }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
