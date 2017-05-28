import React, { Component } from "react"
import { View, Text } from "react-native"
import Button from "../../Tags/Button"
import Header from "../../Tags/Header"
import * as firebase from "firebase"
class GetData extends Component {
    constructor() {
        super()
        this.state = {
            dataArray: []
        }
    }

    GetData() {
        let arrdata = []
        let database = firebase.database().ref("NativeDataBase")

        database.on("value", (object) => {
            let key = object.val()
            for (var a in key) {
                arrdata.push(key[a].data);
            }

            this.setState({
                dataArray: arrdata
            })
        });
    }

    render() {
        return (
            <View>
                <Header heading="Getting Data" />

                {this.state.dataArray.map((m, v) => {
                    return (
                        <View key={v} style={style.viewStyle}>
                            <Text>Name : {m.name}</Text>
                            <Text>Email : {m.email}</Text>
                            <Text>Number : {m.number}</Text>
                        </View>
                    )
                })
                }

                <View style={style.btn}>
                    <Button onPress={this.GetData.bind(this)}>Get Data</Button>
                </View>
            </View>
        )
    }
}
export default GetData

const style = {
    viewStyle: {
        padding: 16
    },
    btn: {
        paddingTop: 16
    }
}