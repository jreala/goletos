import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      var complexObject = { firstName: 'Jason', lastName: 'Eala'};
    return (
      <div className="App">
          <h2>{complexObject.firstName} {complexObject.lastName}</h2>
      </div>
    );
  }
}

export default App;
