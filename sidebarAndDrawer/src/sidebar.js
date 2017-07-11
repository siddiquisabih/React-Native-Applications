import React, { Component } from "react"
// import { View } from "react-native"
// import Drawer from 'react-native-drawer'
// import {Button, Text } from 'native-base';
// import Drawerclass from "./Drawer"
import { Drawer , Button } from 'native-base';
import { View  , Text } from 'react-native';
import SideBar from "./sidebar"
import {navigate ,StackNavigator , navigationOptions} from "react-navigation"


class DrawerSide extends Component {
  
  static navigationOptions = {
    drawerLabel: 'Home'
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };
  

  render() {
//   {console.log("navigation", this.props.navigation)}
    return (
     <View></View>
    );
  }
}
export default DrawerSide
