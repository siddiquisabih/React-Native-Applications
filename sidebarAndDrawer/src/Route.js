import { StackNavigator , DrawerNavigator } from "react-navigation"


import DrawerSide from "./sidebar"
import DrawerClass from "./Drawer"

const Route = DrawerNavigator({
  Home: {
    screen: DrawerSide,
  },
  Notifications: {
    screen: DrawerClass,
  },
});

export default Route