import { TextInput, View, Text } from "react-native"
import React, { Component } from "react"

export function Header({text}) {
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
        justifyContent : "center",
        shadowOpacity: 0.2,
        shadowColor:"#000",
        shadowOffset:{width : 0 , height : 2}
        

    }
}
