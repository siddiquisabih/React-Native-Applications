import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button
} from 'react-native';

import { Provider } from "react-redux";
import store from "./store/index"

import Todo from "./todo"



class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}

export default App







