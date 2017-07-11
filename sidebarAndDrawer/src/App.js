import React, { Component } from "react"

import { Drawer , Button } from 'native-base';
import { View  , Text } from 'react-native';
// import SideBar from "./sidebar"
// import App from "./Drawer"
import Route from "./Route"
import {navigate ,StackNavigator , navigationOptions} from "react-navigation"


class App extends Component {
  

  render() {
    return (
      <Route/>
    
    );
  }
}
export default App
