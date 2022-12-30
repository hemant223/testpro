import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment/moment';
export default function MomentPractice() {

     let a = '22-11-2002'

  return (
    <View>
      
      <Text style={{alignSelf:'center'}} >


        {/* foremat Dates */}
        {/* {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
        {/* {moment().format('dddd')} */}
    
        {/* {moment().format('YYYY [hemu] YYYY')} */}
        {/* {moment().format(a)} */}
        {/* {moment().format('[pm]')} */}


        {/* Relative Time */}
        {/* {moment('20001005','YYYYMMDD').fromNow()} */}
        {/* {moment().startOf('day').fromNow()} */}
        {/* {moment().endOf('day').fromNow()} */}
        {/* {moment().startOf('hour').fromNow()} */}
        {/* {moment().endOf('hour').fromNow()} */}


        {/* Calander Time */}
        {/* {moment().subtract(2, 'year').calendar()} */}
        {/* {moment().subtract(2, 'month').calendar()} */}
        {/* {moment().subtract(2, 'days').calendar()} */}
        {/* {moment().calendar()} */}
        {/* {moment().add(5,'days').calendar()} */}
        

        {/* Multiple Locale Support */}
        {/* {moment.locale()} */}
        {/* {moment().format('LTS')} */}
        {/* {moment().format('L')} */}
        {/* {moment().format('LLLL')} */}
       

        </Text>

    </View>
  )
}