import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function FlexBox() {
  return (
   
    <View  style={[styles.container1]}>
    
    <View  style={[styles.box1]}>
      <Text  style={[styles.textCenter]}>Box1</Text>
    </View>
    <View  style={[styles.box2]}>
    <Text  style={[styles.textCenter]}>Box2</Text>
    </View>
    <View  style={[styles.box3]}>
    <Text  style={[styles.textCenter]}>Box3</Text>
    </View>
  {/*   <View  style={[styles.box4]}>
    <Text  style={[styles.textCenter]}>Box4</Text>
    </View>
    <View  style={[styles.box5]}>
    <Text  style={[styles.textCenter]}>Box5</Text>
    </View> */}

  
    </View>
  )
}

const styles = StyleSheet.create({

    
    container1: {
        marginTop:10,
        position:'absolute',
        width:width/1.2,
       height:height,
        backgroundColor: "#bdc3c7",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        
        
    },
    box1: {
       justifyContent:'center',
       width:85,
       height:85,
       backgroundColor:'red'
       
       
    },
    box2: {
        alignSelf:'flex-end',
        justifyContent:'center', 
        backgroundColor:'green',
        height:85,
        width:85,
        
    },
    box3: {
        justifyContent:'center',
        width:85,
        height:85,
        backgroundColor:'yellow',
    },
    box4: {
        justifyContent:'center',  
        width:85,
        height:85,
        backgroundColor:'#2980b9',
    },
    box5: {
        justifyContent:'center',
        width:85,
        height:85,
        backgroundColor:'#8e44ad',
      },
    textCenter: {
    
      textAlign:'center'
      
      },


})