import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Button
} from 'react-native';

import { Provider } from "react-redux";
import store from "./store/index"


import Midware from "./store/middleware"

import { connect } from "react-redux"


function mapStateToProps(state) {
    return {
        componentState: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        saveText: () => {
            dispatch(Midware.AddUserText())
        }
    }
}








class Todo extends Component {

    constructor() {
        super()
        this.state = {
            text: '',
            array: [],
        }
    }




    add() {
        if (this.state.text !== '') {
            this.state.array.push({ text: this.state.text })
            this.setState({
                text: ''
            })
            this.props.saveText()
        }

        else {
            alert('enter something')
        }

    }




    componentWillReceiveProps(prop) {
        if (prop.componentState.add) {
        }
    }

    componentWillMount() {
        console.disableYellowBox = true
    }


  


    render() {
        return (



            <View style={styles.container} >
                <TextInput placeholder='Enter Something' placeholderTextColor='green' value={this.state.text} onChangeText={(text) => { this.setState({ text: text }) }} />
                <Button title='ADD' onPress={this.add.bind(this)} />
                {
                    this.state.array[0] !== undefined ? this.state.array.map((m, v) => {
                        return (
                            <View key={v}>
                                <Text>{m.text}</Text>
                              
                            </View>
                        )
                    })
                        : null
                }

            </View>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

let styles = {
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}