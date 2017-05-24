import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../Tags/Button"
import Input from "../Tags/Input"
import Header from "../Tags/Header"
import Spinner from "../Tags/spinner"

class App extends Component {
    render() {
        return (
            <View>
                <Header
                    text="Signup"
                    />
                <Input
                    placeHolder="Email"
                    />
                <Input
                    placeHolder="password"
                    secureTextEntry
                    />
                <Button>Signup</Button>
            </View>
        )
    }
}
export default App