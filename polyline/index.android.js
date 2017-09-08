import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Polyline from '@mapbox/polyline';
import { connect } from 'react-redux';



export default class polyline extends Component {
  constructor(props) {
    super(props)
    this.state = {
        coords: []
    }
}

static navigationOptions = {
    header: false
}

componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    this.getDirections("24.882263, 67.0672172", "24.858615,67.010378")
}

async getDirections(startLoc, destinationLoc) {
    try {
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return {
                latitude: point[0],
                longitude: point[1]
            }
        })
        this.setState({ coords: coords })
        return coords
    } catch (error) {
        alert(error)
        console.log('err', error)
        return error
    }
}

render() {
    console.log(this.props)
    return (
        <View>
            <MapView style={styles.map}
                region={{
                    latitude: 24.8716,
                    longitude: 67.0599,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                >

                <MapView.Polyline
                    coordinates={this.state.coords}
                    strokeWidth={4}
                    strokeColor="red" />

            </MapView>
        </View>
    );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('polyline', () => polyline);
