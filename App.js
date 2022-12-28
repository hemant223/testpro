import React from 'react';
import { View,Dimensions } from 'react-native';
import Button from './src/components/Button';
import Spacer from './src/components/Spacer';
import Center from './src/components/Center';

const width = Dimensions.get('window').width;

const App = () => {

  const onPress = () => {
    alert('clicked')
  }

  return (
  
   
      <Button
        canShow
        btn1OnPress={()=>{alert('hello')}}
        btn2OnPress={()=>{alert('second btn')}}

        text='Submit'
        type='outlined'
        bordered
        size='small'
        onPress={onPress}
        num='1'
      />
  
   
  );
};


export default App
