import React, { Component } from "react"
import { Text, View } from "react-native"
import firebase from "firebase"
import Signup from "../Components/Signup/Signup"
import Login from "../Components/Login/Login"
class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
            authDomain: "bloodbank-876e1.firebaseapp.com",
            databaseURL: "https://bloodbank-876e1.firebaseio.com",
            projectId: "bloodbank-876e1",
            storageBucket: "bloodbank-876e1.appspot.com",
            messagingSenderId: "560849097238"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>

            <Login/>

                {
                    //    <Signup />
                }
            </View>
        )
    }
}
export default App

