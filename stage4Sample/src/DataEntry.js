import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as firebase from "firebase"



class DataEntry extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            disease: '',
            cost: '',
            medication: '',
            newData: []
        }
    }

    saveData() {
        let obj = {
            name: this.state.name,
            disease: this.state.disease,
            cost: this.state.cost,
            medication: this.state.medication,

        }

        let database = firebase.database().ref()
            .child('UserData')

        var data = {
            obj
        }
        database.push(data)

    }



    getData() {
        let database = firebase.database().ref("UserData")
        arrdata = []
        database.on("value", (object) => {
            let key = object.val()
            for (var a in key) {
                arrdata.push(key[a].obj);
            }

        })
        this.setState({
            newData: arrdata
        })
    }


    getDataByName (){
let arry = []
let database = firebase.database().re('ammu')

        database.on('value' , (object)=>{
            let key = object.val()
            for(var a in key){
                arry.push(key[a])
            }
        })




    }







    render() {
        return (
            <View>

                {
                    this.state.newData.map((m, v) => {
                        return (

                            <View key={v}>
                                <Text>{m.name}</Text>
                                <Text>{m.cost}</Text>
                                <Text>{m.disease}</Text>
                                <Text>{m.medication}</Text>


                            </View>
                        )
                    })
                }

                <TextInput
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        })
                    }}

                    value={this.state.name}
                    placeholder="Enter Name"
                />


                <TextInput
                    onChangeText={(text) => {
                        this.setState({
                            disease: text
                        })
                    }}

                    value={this.state.disease}
                    placeholder="Enter Disease"
                />

                <TextInput
                    onChangeText={(text) => {
                        this.setState({
                            medication: text
                        })
                    }}
                    value={this.state.medication}
                    placeholder="Enter Medication"
                />

                <TextInput
                    onChangeText={(text) => {
                        this.setState({
                            cost: text
                        })
                    }}

                    value={this.state.cost}
                    placeholder="Enter Cost"
                />


                <Button title="Save"
                    onPress={this.saveData.bind(this)}
                >

                    Save
                </Button>

                <Button title="Get"
                    onPress={this.getData.bind(this)}
                >

                    Get
                </Button>





                {console.log(this.state.newData)}



            </View>
        )
    }
}
export default DataEntry