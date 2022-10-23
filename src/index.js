import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p><i>This will be the future website of BetterTech</i></p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))