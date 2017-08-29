import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView from "react-native-maps"
import { Image } from "react-native"

class App extends Component {
    constructor() {
        super()
        this.state = {
            latitude: 0.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0002,
            longitudeDelta: 0.0021,
            statusBarHeight: {},

        }

    }


    componentWillMount() {

        setTimeout(() => this.setState({ statusBarHeight: styles.container }), 500);

        navigator.geolocation.getCurrentPosition((pos) => {
            if (pos) {
                var crd = pos.coords;
                console.log(pos.coords)
                this.setState({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                })
            }
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


        setTimeout(() => {
            console.log(this.state.latitude)
            console.log(this.state.longitude)

        }, 1000)
    }

    render() {
        return (
            <View style={this.state.statusBarHeight}>

                <MapView
                    provider="google"
                    style={styles.map}
                    region={this.state}
                    mapType="standard"
                    followsUserLocation
                    showsUserLocation
                    showsCompass
                    showsMyLocationButton
                    toolbarEnabled
                />




            </View>
        )
    }
}
export default App


const styles =
    {

        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        map: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 300,
            flex: 1,
            zIndex: -1
        },

    }