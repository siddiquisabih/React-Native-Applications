import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { View , Button , Text } from 'react-native';
// import SideBar from "./sidebar"
import App from "./App"
import {navigate , navigation , navigationOptions} from "react-navigation"

class DrawerClass extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

export default DrawerClass




