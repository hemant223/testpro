import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const width = Dimensions.get('window').width;

const Button = ({
  text,
  onPress,
  type = 'filled',
  color = '#3f51b5',
  bordered = false,
  size = 'large',
  num,
  canShow,
  btn1OnPress,
  btn2OnPress
}) => {
  const large = width / 1.3;
  const small = width / 2.4;
  const btnSize = size === 'large' ? large : small;
  const btnBgColor = type === 'filled' ? color : 'transparent';
  const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2';
  const btnBorderRadius = bordered ? 30 : 5;

  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    paddingVertical: 10,
    // width: btnSize,
    borderRadius: btnBorderRadius,
    backgroundColor: 'red',

  };

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
  };

  const border = type === 'outlined' && {
    borderColor: '#e7e7e7',
    borderWidth: 2,
  };



  const ContainerDir = {
    padding: 5,
    flex:2
  }; 

  var Buttonn = []
  // var num = num
  for (let index = 0; index < num; index++) {
    Buttonn.push(index)
  }



  return (
    <View>
      <ScrollView>
        <View style={{
          padding: 5,
          // display: 'flex',
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: 'yellow',
          justifyContent: 'center',
          width: width,
          height: '100%',
          flex:1
        }}>

          {/* {Buttonn.map((i) => {
            return ( */}
              <View style={[ContainerDir]}  >
                <TouchableOpacity onPress={btn1OnPress} activeOpacity={0.7}>
                  <View style={[containerCommonStyle, border]}>
                    <Text style={[textCommonStyle]}> {text} </Text>
                  </View>
                </TouchableOpacity>
              </View>
            {/* )
          })} */}
          {canShow && <View style={[ContainerDir]} >
                <TouchableOpacity onPress={btn2OnPress} activeOpacity={0.7}>
                  <View style={[containerCommonStyle, border]}>
                    <Text style={[textCommonStyle]}> {text} </Text>
                  </View>
                </TouchableOpacity>
              </View>}
        </View>
      </ScrollView>
    </View>

  );
};

export default Button;

Button.defaultProps={
  text:'submit',
  canShow:false,
  btn1OnPress:()=>{},
  btn2OnPress:()=>{}
}

// Button.propTypes = {
//   text: 'string'
// };
