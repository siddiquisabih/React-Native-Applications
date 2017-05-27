import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../../Tags/Button"
import Input from "../../Tags/Input"
import Header from "../../Tags/Header"
import Spinner from "../../Tags/spinner"
import firebase from "firebase"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '', password: ''
        }
    }
    Signup() {
        let id = this.state.email;
        let pass = this.state.password

        const auth = firebase.auth()
        auth.createUserWithEmailAndPassword(id, pass).then(() => {
            console.log("Signup sucess")
        })
    }
    render() {
        return (
            <View>
                <Header text="Signup"
                    />

                <Input
                    placeHolder="Email"
                    onChangeText={email => {
                        this.setState({
                            email
                        })
                    } }
                    value={this.state.email}
                    />

                <Input
                    placeHolder="Password"
                    onChangeText={password => {
                        this.setState({
                            password
                        })
                    } }
                    secureTextEntry
                    value={this.state.password}
                    />

                <Button onPress={this.Signup.bind(this)}>Signup</Button>

            </View>
        )
    }
}
export default Signup