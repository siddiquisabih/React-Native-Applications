
import {StackNavigator} from "react-navigation"
import SignUp from '../Auth/Signup';
import Login from '../Auth/Login';
import Home from '../Home';
import DataEntry from '../DataEntry';
import Dashboard from '../Dashboard/dashboard';




const Router =StackNavigator({

    RouteHome:{screen:Home},
    RouteSignUp:{screen:SignUp},
    RouteLogin:{screen:Login},
    RouteDataEntry:{screen:DataEntry},
    RouteDashboard:{screen:Dashboard},



})
export default Router

