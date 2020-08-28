import React from 'react'
import {View,Text} from 'react-native'

const Login=(props)=>{
    return(
        <View>
            <Text>Login Screen</Text>
            <Text>{props.data2}</Text>
        </View>
    )
}
export default Login;