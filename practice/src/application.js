import React , {Component} from 'react'
import { Text, View, TextInput } from 'react-native'

import Button from "./button"
import InputType from "./InputText"
// <Button/>
class Application extends Component{
    render(){
        return(
<View>




<InputType holder="Name" text="Email"/>
<InputType holder="Password" text="Password"/>
<Button clickText="Signup"/>


</View>


        )
    }
}


export default Application

