
import React from 'react';
import {
  View,
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Button from "./src/Tags/Button"
import Screen from "./src/screen"
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Hello, Navigation!</Text>

        <Button onPress={()=>{
          navigate('chat')
        }} title="chat with">click to move</Button>

      </View>
    )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  chat : {screen : Screen}
});

AppRegistry.registerComponent('Routing', () => SimpleApp);