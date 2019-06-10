import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
      gems: []
    }
  }
  render(){
    return(
      <div className='App'>
        <h1>crystalline</h1>
      </div>
    )
  }
}

export default App;
