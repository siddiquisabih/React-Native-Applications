import { NavigationContainer } from "@react-navigation/native"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import MainListing from "./mainlisting";
import ListDetail from "./listDetail";



const Stack = createSharedElementStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="listing">

                <Stack.Screen name="listing" component={MainListing} />
                <Stack.Screen name="listDetail" component={ListDetail} sharedElements={(route, otherRoute, showing) => {
                    return [{ id: `productImageId${route.params.item.id}`, animation: "move" }]
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;