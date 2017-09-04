import RNGooglePlaces from 'react-native-google-places';
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

class GPlacesDemo extends Component {
    openSearchModal() {
        console.log(1)
        RNGooglePlaces.openPlacePickerModal()
            .then((place) => {
                console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }



    render() {
        return (
            <View style={styles.container}>
                <Button title="open auto complete"
                    onPress={this.openSearchModal.bind(this)}
                >
                </Button>
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

export default GPlacesDemo