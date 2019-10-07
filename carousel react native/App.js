/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CircularCarousel from './CircularCarousel';



class App extends React.Component {


  componentWillReceiveProps(props) {
    console.log(props)
  }


  render() {
    const dataSource = [
      { url: require('./1.png'), color: "" },
      { url: require('./2.png'), color: '' },
      { url: require('./3.png'), color: "" },
      // { url: "", color: "#034223" },
      // { url: "", color: "#015280" },
      // { url: "", color: "#015280" },
    ];



    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CircularCarousel
          dataSource={dataSource}
          onItemPress={(item) => {
            console.log(item);
          }
          }
          style={{ height: 350, width: 350 }}
          itemStyle={{ width: 200, height: 220 }}
          // style={{ height: 200, width: 350 }}
          // itemStyle={{ width: 110, height: 120 }}
          radius={100}
        />
      </View>
    );
  }
}

export default App;
