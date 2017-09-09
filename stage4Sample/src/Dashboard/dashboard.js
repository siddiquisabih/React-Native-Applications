import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Dashboard extends Component {

    navigateDataentry() {
        this.props.navigation.navigate('RouteDataEntry')


    }



    static navigationOptions = {

        title: 'Dashboard',
        headerLeft: false


    }

    render() {
        return (
            <View>


                <Button title="Add Patient"
                    onPress={this.navigateDataentry.bind(this)}
                >

                    SignUp
                </Button>







            </View>
        );
    }
}