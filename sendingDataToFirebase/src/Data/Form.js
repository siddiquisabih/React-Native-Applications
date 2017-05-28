import React, { Component } from "react"
import { View, Text } from "react-native"
import Header from "../Tags/Header"
import Button from "../Tags/Button"
import Input from "../Tags/Input"
import * as firebase from "firebase"


class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            number: ''

        }
    }

    sendData() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            number: this.state.number
        }
        let datbase = firebase.database().ref().child("/NativeDataBase");
        const userData = {
            data
        }
        datbase.push(userData)
    }

    render() {
        return (

            <View>
<Header heading="Sending Data" />

                <Input
                    placeHolder="Name"
                    onChangeText={name => {
                        this.setState({
                            name
                        })
                    } }
                    value={this.state.name}
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
                    placeHolder="Contact Number"
                    onChangeText={number => {
                        this.setState({
                            number
                        })
                    } }
                    value={this.state.number}

                    />

                <Button onPress={this.sendData.bind(this)}>
                    Send Data
</Button>

            </View>
        )
    }
}
export default Form