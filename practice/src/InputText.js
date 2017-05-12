import React from 'react'
import { Text,View, TextInput  } from 'react-native'





function InputType({holder , text}) {
    return (
      <View >
            <Text>{text}</Text>
            
            <TextInput
                placeholder={holder}
                style={{ height: 40, width: 150 }}
                
            />
        </View>
    )
}

export default InputType

