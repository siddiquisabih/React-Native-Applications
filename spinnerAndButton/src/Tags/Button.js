import { Text, TouchableOpacity, onPress } from "react-native"
import React, { Component } from "react"

export function Button({children, onPress}) {
    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const style = {
    button: {
        alignSelf: "center",
        margin: 15,
        borderWidth: 1,
    },
    text: {
        fontSize: 18,
        margin: 5,
        color: "blue",
    }
}
