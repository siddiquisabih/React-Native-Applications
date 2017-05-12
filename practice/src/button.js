import React from 'react'
import { Text, TouchableOpacity } from 'react-native'




const styles = {
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

function Button({clickText }) {
    return (
        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{clickText}</Text>
        </TouchableOpacity>
    )
}






export default Button

