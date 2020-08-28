import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.item1}>
          <Text style={styles.textBody}>Item number 1</Text>
        </View>

        <View style={styles.item2}>
          <Text style={styles.textBody}>Item number 2</Text>
        </View>

        <View style={styles.item3}>
          <Text style={styles.textBody}>Item number 3</Text>
        </View>

        <View style={styles.item4}>
          <Text style={styles.textBody}>Item number 4</Text>
        </View>

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,justifyContent:"center",
    backgroundColor:"#fff",alignItems:"stretch"
  },
  textBody:{
    fontSize:15,color:'white',padding:10,fontWeight:"bold"
  },
  item1:{
    flex:1,backgroundColor:"orange"
  },
  item2:{
    flex:1,backgroundColor:"purple"
  },
  item3:{
    flex:1,backgroundColor:"yellow"
  },
  item4:{
    flex:1,backgroundColor:"red"
  }
})