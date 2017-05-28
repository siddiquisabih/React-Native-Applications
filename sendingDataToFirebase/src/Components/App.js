import React, { Component } from "react"
import {View ,Text} from "react-native"
import * as firebase from "firebase"
import Form from "../Data/Form"
import Header from "../Tags/Header"


class App extends Component {
componentWillMount(){
      // Initialize Firebase
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

<Form/>
</View>
        )
    }
}
export default App