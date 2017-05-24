import React,{Component} from "react"
import {Text, View} from "react-native"
import Button from "../Tags/Button"
import Input from "../Tags/Input"

class App extends Component{
    render(){
        return(
            <View>

<Input text="Email"
placeHolder="Email"
secureTextEntry
/> 
        <Button>click me</Button>

        </View>
        )
    }
}

export  default App