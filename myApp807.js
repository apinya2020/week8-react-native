import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data: "Some App Data"
    }
  }

  testState(){
    this.setState({data:"New App Data"})
  }

  render(){
    return(
      <View>
        <Text style={{fontSize:50}}>
          {this.state.data}
        </Text>
        <Button 
          title="Update State" 
          onPress={()=>{this.testState()}} />
      </View>
    )
  }
}