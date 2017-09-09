import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component {

    navigateSignUp(){
        this.props.navigation.navigate('RouteSignUp')
        
        
        }


        navigateLogin(){
        this.props.navigation.navigate('RouteLogin')
        

        }

        static navigationOptions={

            title:'Pation App'


        }

    render() {
        return (
            <View>


               <Button title="SiginUp"
                    onPress={this.navigateSignUp.bind(this)}
                >

                    SignUp
                </Button>
              
              
               <Button title="Login"
                    onPress={this.navigateLogin.bind(this)}
                >

                    SignUp
                </Button>


            </View>
        );
    }
}