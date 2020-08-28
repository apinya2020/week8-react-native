import React, {Component} from 'react';
import { Image,Text, View} from 'react-native';
import styled from 'styled-components/native'

export default class App extends Component {
    render() {
      return (
        <Container>
          <Item >
              <Title >Item number 1</Title>
              <Image
                source={{uri: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"}}
                style={{width:310, height: 100}}
               />
          </Item>
          <Item >
              <Title >Item number 2</Title>
          </Item>
          <Item >
              <Title >Item number 3</Title>
          </Item>
              <Item >
              <Title >Item number  4</Title>
          </Item>
        </Container>
      );
    }
}

const Container=styled.View`
    flex:1;
    padding:50px 0;
    justify-content:center;
    background-color:#f4f4f4;
    align-items:center
`
const Title=styled.Text`
    font-size:20px;
    text-align:center;
    color:red;
`
const Item=styled.View`
    flex:1;
    border:1px solid #ccc;
    margin:2px 0;
    border-radius:10px;
    box-shadow:0 0 10px #ccc;
    background-color:#fff;
    width:80%;
    padding:10px;
`