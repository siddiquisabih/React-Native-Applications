import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

function Spinner({size}) {
    return (
        <View>
            <ActivityIndicator
                size={size}
                />
        </View>
    )
}

const styles = {
    spinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Spinner