import { TextInput, View, Text } from "react-native"
import React, { Component } from "react"

export function Input({ secureTextEntry, onChangeText, value, text, placeHolder }) {
    return (
        <View>

            <Text>{text}</Text>
            <TextInput secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeHolder}
                />
        </View>
    )
}
const style = {
    text: {
        fontSize: 18,
        margin: 5,
        

    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
}
}
