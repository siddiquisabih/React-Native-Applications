import RNGooglePlaces from 'react-native-google-places';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import GPlacesDemo from "./places"

class Google extends Component {
  render() {
    return (
      <GPlacesDemo />
    );
  }
}

AppRegistry.registerComponent('googlePlaces', () => Google);
