import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../../Tags/Button"
import Header from "../../Tags/Header"
import Input from "../../Tags/Input"
import Midware from "../../Store/Middleware/Midware"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {

        storeState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

        signupMeth: (idPass) => {
            dispatch(Midware.SignupUser(idPass))
        }

    }
}

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    SignupUserMethod() {
        let userDetail = {
            id: this.state.email,
            pass: this.state.password
        }
        this.props.signupMeth(userDetail)
    }

    render() {
        return (
            <View>
                <Header text="Signup" />

                <Input
                    placeHolder="abc@example.com"
                    onChangeText={email => {
                        this.setState({
                            email
                        })
                    } }
                    value={this.state.email}
                    />

                <Input
                    placeHolder="password"
                    secureTextEntry
                    onChangeText={password => {
                        this.setState({
                            password
                        })
                    } }
                    value={this.state.password}
                    />

                <Button onPress={this.SignupUserMethod.bind(this)}>Signup</Button>

            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)