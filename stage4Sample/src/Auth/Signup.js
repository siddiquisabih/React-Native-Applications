import React, { Component } from 'react';
import { Text, View,TextInput,Button } from 'react-native';
import * as firebase from "firebase"

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            pass:''
          
        }
    }
    static navigationOptions={
        title : "Signup"
    }

    signup(){

                var email=this.state.email
                var pass= this.state.pass

        firebase.auth().createUserWithEmailAndPassword(email, pass).then(()=>{

            alert("signup");

        }
    
    
    )
        
        
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          

    }
  
    render() {
    return (
      <View>

          <TextInput  onChangeText={(text) => {
                        this.setState({
                            email: text
                        })
                    }}
          placeholder='Enter email'
          value={this.state.email} 
          />

          <TextInput  secureTextEntry onChangeText={(text) => {
                        this.setState({
                            pass: text
                        })
                    }}
          placeholder='Enter email'
             value={this.state.pass} 
                    
          />

         

              <Button title="SignUp"
                    onPress={this.signup.bind(this)}
                >

                    SignUp
                </Button>


      </View>
    );
  }
}
