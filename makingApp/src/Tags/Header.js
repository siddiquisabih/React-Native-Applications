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
        backgroundColor : "#F8F8F8",
        height: 60,
        paddingTop: 15,
        justifyContent : "center",
        shadowOpacity: 0.6,
        shadowColor:"#000",
        shadowOffset:{width : 0 , height : 2}
        

    }
}
export default Header