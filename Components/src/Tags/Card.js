import React, { Component } from 'react';
import { View } from 'react-native';

export function Card(props) {
    return (
        <View style={styles.viewStyle}>
        {props.children}
        </View>
    )
}

const styles = {
    viewStyle:{
        borderWidth: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        
    }
}
