import { TextInput, View, Text } from "react-native"
import React, { Component } from "react"

function Header({text}) {
    return (
        <View style={style.viewStyle}>
            <Text style={style.text}>
                {text}
            </Text>
        </View>
    )
}

const style = {
    text: {
        fontSize: 20
    },
    viewStyle: {
        alignItems: "center",
        height: 60,
        paddingTop: 15,
    }
}
export default Header