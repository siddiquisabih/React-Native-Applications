import {TextInput , View , Text} from "react-native"
import React , {Component} from "react"


function Input({ secureTextEntry , onChangeText , value , text , placeHolder }){
return(
    <View>
    
    <Text>{text}</Text>

<TextInput secureTextEntry={secureTextEntry} 
onChangeText={onChangeText} 
value={value} 
placeholder={placeHolder}  

/>


</View>
)
}
export default Input