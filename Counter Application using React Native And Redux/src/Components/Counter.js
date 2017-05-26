import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../Tags/Button"
import {connect} from "react-redux"
import Actions from "../Store/Action/Action"

function mapStateToProps(state) {
    return {
        incValue: state
    }
}

function mapDispatchToProps(dispatch) {
    return{
        inc: (value)=>{
    dispatch(Actions.IncrementMethod(value))    
    },

        dec: (value)=>{
            dispatch(Actions.DecrementMethod(value))
        }
    }
}

class Counter extends Component {
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
        this.props.inc(this.state.counter)
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
        this.props.dec(this.state.counter)
    }

    render() {
        return (
            <View>
            {console.log(this.props.incValue)}
                <Text style={style.textStyle}>{this.state.counter}</Text>
                <Button onPress={this.increment}>Increment</Button>
                <Button onPress={this.decrement}>Decrement</Button>
                <Text style={style.textStyle}>React Native And Redux</Text>
                
            </View>
        )
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (Counter)

style = {
    textStyle: {
        fontSize: 20,
        color: "blue",
        alignSelf: "center"
    }
}