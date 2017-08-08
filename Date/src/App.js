import React, { Component } from "react"
import { Button, Container, Text,  } from "native-base"
import DatePicker from "react-native-datepicker"


class App extends Component {
    constructor(){
        super()
        this.state = {
            date : "2017-05-15"
        }
    }
    render() {
        return (
            <Container>
         <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2017-05-01"
        maxDate="2018-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      <Text>{this.state.date}</Text>
            </Container>
        )
    }
}
export default App