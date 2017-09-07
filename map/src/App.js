import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { Button, Icon } from 'native-base';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATION = width / height
const LATTITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATION

class Map extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Map',
            headerStyle: { backgroundColor: '#1f96f2' },
            headerTitleStyle: { color: 'white', marginLeft: '40%', marginRight: '40%' },
            headerLeft: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name='menu' /></Button>
        }
    }
    constructor(props) {
        super(props)

        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            },
            markerPosition: {
                latitude: 0,
                longitude: 0,
            }
        }
    }

    watchID: ?number = null

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {

            if (position) {
                alert("location mil rahi hai user say")
                var lat = position.coords.latitude
                var long = position.coords.longitude

                var initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: LATTITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }


                this.setState({ initialPosition: initialRegion })
                this.setState({ markerPosition: initialRegion })
            }
        }, (error) => alert(error.message),

            {
                // enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            })

        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var lastRegion = {
                latitude: lat,
                longitude: long,
                longitudeDelta: LONGITUDE_DELTA,
                latitudeDelta: LATTITUDE_DELTA,
            }

            this.setState({ initialPosition: lastRegion })
            this.setState({ markerPosition: lastRegion })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
                <MapView
                    provider="google"
                    mapType="standard"
                    style={styles.map}
                    initialRegion={this.state.initialPosition}
                    showsUserLocation
                    showsCompass
                    showsMyLocationButton
                    toolbarEnabled
                    followsUserLocation
                >

                    <MapView.Marker
                        coordinate={this.state.markerPosition}>

                    </MapView.Marker>
                </MapView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },

    // radius: {
    //     height: 50,
    //     width: 50,
    //     borderRadius: 50 / 2,
    //     overflow: 'hidden',
    //     backgroundColor: 'rgba(0, 122, 255, 0.1)',
    //     borderWidth: 1,
    //     borderColor: 'rgba(0, 122, 255, 0.3)',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },

    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    },

    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },

})
export default Map 