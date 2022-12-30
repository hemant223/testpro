import React, { useEffect } from 'react';
import { View, Dimensions ,Text} from 'react-native';
import Button from './src/components/Button';
import Spacer from './src/components/Spacer';
import Center from './src/components/Center';
import FlexBox from './src/components/FlexBox';
import MomentPractice from './src/components/MomentPractice';
const width = Dimensions.get('window').width;

const App = () => {

  // const onPress = () => {
  //   alert('clicked')
  // }
  
   
  // const fetchData=async(url)=>{
  //   try{
  //     const result = await fetch(url)
  //     const data = await result.json()
  //     console.log("dummy  data : ",data)
  //   }catch(err){
  //     console.log("Catch Error :",err)
  //   }
  // }

  // useEffect(()=>{
  //   fetchData('https://dummyjson.com/products')
  // })

  return (
    <>

      {/* <Button
        // canShow
        btn1OnPress={() => { alert('hello') }}
        btn2OnPress={() => { alert('second btn') }}
        btntext1='hello'
        btntext2='hemu'
        type='outlined'
        bordered
        size='small'
       // onPress={onPress}
      
      /> */}

       <FlexBox/>


    </>

  );
};


export default App
