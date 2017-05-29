import React, { Component } from "react"

import { View, Text } from "react-native"
import { StackNavigator } from "react-navigation"



class Screen extends Component {
static navigationOptions = {
    title: 'Chat with',
  };

    render() {
        return (
            <Text>this is screen Component</Text>
        )
    }
}
export default Screen