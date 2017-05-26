import React,{Component} from "react"
import {Text, View} from "react-native"
import {Link} from "react-router"
import Button from "../Tags/Button"
import Header from "../Tags/Header"

class App extends Component{
    render(){
        return(
             <View>
            <Text>Blood Bank</Text>

<Link to="/Signup">
            <Button>
            Signup
            </Button>
            </Link>

            <Button>Login</Button>
        </View>
           
        )
    }
}



export  default App