import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../../Tags/Button"
import Input from "../../Tags/Input"
import Header from "../../Tags/Header"
import firebase from "firebase"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '', password: ''
        }
    }
    Login() {
        let id = this.state.email;
        let pass = this.state.password

        const auth = firebase.auth()
        auth.signInWithEmailAndPassword(id, pass).then(() => {
            console.log("Login sucess")
        })
    }
    render() {
        return (
            <View>
                <Header text="Login"
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

                <Button onPress={this.Login.bind(this)}>Login</Button>

            </View>
        )
    }
}
export default Login