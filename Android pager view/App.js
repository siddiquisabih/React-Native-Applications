import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }


  check(e) {
    console.log(this.state.count)
    console.log(e)
    this.setState({ count: 3 })
  }
  
  moveOn() {
    this.viewPager.setPage(2);
  }

  render() {
    return (
      // <View style={styles.container}>

      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={this.check.bind(this)}
        setPage={this.state.count}
        ref={viewPager => { this.viewPager = viewPager; }}
        scrollEnabled={false}
      >

        <View>
          <Text>sabih siddiqui</Text>

          <Button title='Move' onPress={this.moveOn.bind(this)} />
        </View>
        <View>
          <Text>sabih uddin</Text>
        </View>
        <View>
          <Text>sabih Mohiuddin</Text>
        </View>


      </ViewPagerAndroid>



      // </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}
