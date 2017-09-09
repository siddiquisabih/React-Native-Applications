import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import * as firebase from "firebase"

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            pass: ''

        }
    }
    static navigationOptions = {
        title: "Login"
    }
    Login() {

        var email = this.state.email
        var pass = this.state.pass


        firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
            this.props.navigation.navigate('RouteDashboard')
        })



            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }
    render() {
        return (
            <View>

                <TextInput onChangeText={(text) => {
                    this.setState({
                        email: text
                    })
                }}
                    placeholder='Enter email'
                    value={this.state.email}
                />

                <TextInput onChangeText={(text) => {
                    this.setState({
                        pass: text
                    })
                }}
                    placeholder='Enter Password'
                    value={this.state.pass}

                />

                <Button title="Login"
                    onPress={this.Login.bind(this)}
                >

                    SignUp
                </Button>


            </View>
        );
    }
}
