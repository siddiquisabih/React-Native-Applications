import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as firebase from "firebase"
//import SignUp from './Auth/Signup';
import Router from'./Router/Router';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAQp06WmfwHZtcfm6Ata18X5_O-Hc-OuF0",
    authDomain: "patient-tracker-5a519.firebaseapp.com",
    databaseURL: "https://patient-tracker-5a519.firebaseio.com",
    projectId: "patient-tracker-5a519",
    storageBucket: "patient-tracker-5a519.appspot.com",
    messagingSenderId: "476880753581"
};
firebase.initializeApp(config);



class App extends Component {

    render() {
        return (
                <Router/>


        )
    }
}
export default App