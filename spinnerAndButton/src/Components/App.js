import React, { Component } from "react"
import { Text, View } from "react-native"
import { Button, Header, Spinner } from "../Tags"
class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }




    buttonClik() {
        this.setState({
            loading: true
        })
    }




    helper() {
        console.log("state" , this.state.loading)

        if (this.state.loading) {
            return <Spinner size="large" />
        }

        return (
    <Button onPress={this.buttonClik.bind(this)}>
                clik to load
            </Button>
        )
    }

    render() {

        return (
            <View>
                <Header
                    text="Loading"
                />

                {this.helper()}
            </View>
        )
    }
}
export default App

