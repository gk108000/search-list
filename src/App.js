import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from "./Components/SearchInput"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchInput />
      </React.Fragment>
    );
  }
}

export default App;
