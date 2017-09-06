import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class App extends Component {

  constructor() {
    super()
    this.state = {
      latitude: '',
      longitude: '',

    }
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords)
      var crd = pos.coords;
      this.setState({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    },
      (err) => {
        alert('check your network conectivity and location or gps')
      }),
      () => {
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
      }
  }

  render() {
    return (

      <View>

        <Button title="GET"
          onPress={this.getLocation.bind(this)}
        >GET</Button>

        <Text>latitude : {this.state.latitude}</Text>
        <Text>longitude : {this.state.longitude}</Text>

      </View>
    );
  }
}
export default App