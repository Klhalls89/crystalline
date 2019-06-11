import React, { Component } from 'react';
import amethyst from '../styles/amethyst.png'

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
        <header>
          <img src={amethyst}/>
          <h1>crystalline</h1>
        </header>
      </div>
    )
  }
}

export default App;
