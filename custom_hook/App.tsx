import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import UseCounterHook from './counterHook';


function App(): React.JSX.Element {

  const { counter, increment, dencrement, reset } = UseCounterHook(0)

  return (
    <SafeAreaView style={styles.container}>
      <Text>Counter : {counter}</Text>
      <View style={{ marginVertical: 10 }} />
      <TouchableOpacity onPress={increment} style={styles.buttonHead}><Text style={styles.buttonText}>Increment</Text></TouchableOpacity>
      <View style={{ marginVertical: 10 }} />
      <TouchableOpacity onPress={dencrement} style={styles.buttonHead}><Text style={styles.buttonText}>Decrement</Text></TouchableOpacity>
      <View style={{ marginVertical: 10 }} />
      <TouchableOpacity onPress={reset} style={styles.buttonHead}><Text style={styles.buttonText}>Rest Counter</Text></TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  buttonHead: {
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15
  },
  buttonText: {
    color: 'black',
    fontWeight: "600"
  },

});

export default App;
