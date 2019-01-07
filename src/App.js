import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <img src={logo} className="App-logo" alt="logo" />
                <span>This is my first app in ReactJS .
               Thank you.!</span>

              </div>
            </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
