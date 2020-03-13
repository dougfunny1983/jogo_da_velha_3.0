import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from './store';
import Table from "./components/Table";
import "./App.css";

const componentMajor = () => (
  <div className="App">
    <header className="App-header">
      <Table />
    </header>
  </div>
);

export default class App extends Component {
  render() {
    return <Provider store={store}>{componentMajor()}</Provider>;
  }
}
