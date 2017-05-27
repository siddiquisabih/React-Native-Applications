import React, { Component } from "react"
import { Text, View } from "react-native"
import firebase from "firebase"
import Signup from "../Components/Signup/Signup"
class App extends Component {

    componentWillMount() {
        var config = {
            //config details go here
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
          
                <Signup />
            </View>
        )
    }
}
export default App

