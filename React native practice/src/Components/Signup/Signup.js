import React,{Component} from "react"
import {Text, View} from "react-native"
import Button from "../../Tags/Button"
import Input from "../../Tags/Button"
import Header from "../../Tags/Button"

class Signup extends Component{
    render(){
        return(
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



export  default Signup