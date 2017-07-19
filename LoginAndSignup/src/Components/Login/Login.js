import React, { Component } from "react"
import { Text, View } from "react-native"
import Button from "../../Tags/Button"
import Header from "../../Tags/Header"
import Input from "../../Tags/Input"

import { connect } from "react-redux"
import Midware from "../../Store/Middleware/Midware"

function mapStateToProps(state) {
    return {
        storeState: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginMeth: (idPass) => {
            dispatch(Midware.LoginUser(idPass))

        }
    }
}
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    LoginUserMethod() {
        let userDetail = {
            id: this.state.email,
            pass: this.state.password
        }
        this.props.loginMeth(userDetail)
    }

    render() {
        return (
            <View>
                <Header text="Login" />
                {console.log(this.props.initialState)}

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

                <Button onPress={this.LoginUserMethod.bind(this)}>Login</Button>

            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)