import React, { Component } from "react"
import {View} from "react-native"
import store from "../Store"
import {Provider} from "react-redux"
import Counter from "./Counter"


class App extends Component {
    render() {
        return (
<Provider store={store}>


            <Counter/>

        </Provider>
        )
    }
}
export default App