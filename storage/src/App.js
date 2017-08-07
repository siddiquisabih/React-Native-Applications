import React, { Component } from "react"
import { Text, Button, Container, Input, Label, Item } from "native-base"
import { AsyncStorage } from "react-native"


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            savedValue: '',
            fetchValue: '',
            user: {}
        }
    }

    saveData() {
        var obj = {
            name: "sabih",
            color: "blue"
        }
        AsyncStorage.setItem('myKey', JSON.stringify(obj))
            .then(() => {
                alert('chal gaya')
            })
    }

    renderDetail = (item) => {
        this.setState({ user: item });
    }

    getData() {
        AsyncStorage.getItem("myKey").then((data) => {
            var userData = JSON.parse(data);
            console.log(userData, 'Get Values');
            this.renderDetail(userData);
        }).done();
    }

    clearData() {
        AsyncStorage.removeItem("myKey")
            .then(() => {
                this.setState({
                    fetchValue: ''
                })
                console.log('value cleared')
            })
    }

    render() {
        return (
            <Container>
                <Item>
                    <Input
                        placeholder="Enter First Name"
                        onChangeText={(text) => this.setState({
                            firstName: text
                        })}
                        />
                </Item>
                <Item>
                    <Button
                        onPress={this.getData.bind(this)}>
                        <Text>
                            Get
            </Text>
                    </Button>
                </Item>

                <Item>
                    <Button
                        onPress={this.clearData.bind(this)}>
                        <Text>
                            Clear
            </Text>
                    </Button>
                </Item>
                <Item>
                    <Button
                        onPress={this.saveData.bind(this)}>
                        <Text>
                            Save
            </Text>
                    </Button>
                </Item>

                <Text>
                    {this.state.fetchValue}
                </Text>

                <Text>{this.state.user.name}</Text>
                <Text>{this.state.user.color}</Text>
            </Container>
        )
    }
}
export default App














//Todo
// data save karana hai            status :  "hogaya"
// multiple data save karana hai   status : "hogaya"
// searching karni hai    
// keys dynamic karni hain