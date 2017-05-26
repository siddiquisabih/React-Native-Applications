import React , {Component} from "react"
import {Route , Router , browserHistory} from "react-router"
import Signup from "../Components/Signup/Signup"
import App from "../Components/App"

class Router extends Component{
render(){
    return(
        <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/Signup" component={Signup}/>
        
        
        
        </Router>
    )
}
}
export default Router