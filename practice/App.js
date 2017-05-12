import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


// import {Button} from "./src/button"
// import InputType from "./src/InputText"
import Application from "./src/application"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>


<Application/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "red",
  }
});
