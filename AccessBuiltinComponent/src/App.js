import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { Dial , DefaultDial} from "react-native-dial"
import {Communications ,phonecall } from "react-native-communications"

class App extends Component {

    render() {
        return (
            <View >
  <TouchableOpacity 
  onPress={() => Communications.phonecall('0123456789', true)}>
          <View>
            <Text>Make phonecall</Text>
          </View>
        </TouchableOpacity>

   {/*<Text>Sabih siddiqui</Text>*/}
            </View>
        );
    }
}

export default App