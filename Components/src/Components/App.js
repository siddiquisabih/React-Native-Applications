import React, { Component } from "react"
import { Text, View } from "react-native"
import {Button ,Header , Input , Spinner , Card} from "../Tags"
class App extends Component {
    render() {
        return (
            <View>
                <Header
                    text="Heading"
                    />
                    
                    <Spinner size="large" />
               <Card>
                <Input
                placeHolder = "sabih siddiqui"
                />
</Card>

    <Card>
                <Input
                placeHolder = "sabih siddiqui"
                />
</Card>



<Button>click me</Button>
<Button>click me</Button>

            </View>
        )
    }
}
export default App

