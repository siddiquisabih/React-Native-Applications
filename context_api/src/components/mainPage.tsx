
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../context/themeContext';




function MainPage(): React.JSX.Element {
  const { themeMode, toggleTheme } = useTheme();


  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

      <Text style={styles.themeText}>Selected Theme {'->'} {themeMode}</Text>

      <TouchableOpacity style={styles.button} onPress={toggleTheme}><Text>Change Theme</Text></TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  themeText: {
    marginBottom: 32,
  },
  button: {
    paddingHorizontal: 24,
    backgroundColor: "lightblue",
    borderRadius: 15,
    paddingVertical: 10,

  },

});

export default MainPage;
