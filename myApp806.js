import React, {Component} from 'react'
import {View,Text} from 'react-native'
import Login from './components/Login' //child component
import Home from './components/Home'

const App=()=>{
  const data="some data"
  const data2="Ice Cream"
  return(
    <View>
      {/*<Text>Hell My Artifact</Text>*/}
      <Login data2={data2} />
      <Home data1={data} />
    </View>
  )
}
export default App;