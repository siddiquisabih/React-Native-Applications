import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../Tags/Button"

class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <View>
                <Text style={style.textStyle}>{this.state.counter}</Text>
                <Button onPress={this.increment}>Increment</Button>
                <Button onPress={this.decrement}>Decrement</Button>
            </View>
        )
    }
}
export default App
style = {
    textStyle: {
        fontSize: 20,
        color: "blue",
        alignSelf: "center"
    }

}