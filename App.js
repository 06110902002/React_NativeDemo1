/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TextInput, View,TouchableOpacity,Button} from 'react-native';
import {DrawerNavigator,TabNavigator,StackNavigator} from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//获取屏幕信息
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.textInputViewStyle}>
              <TextInput
                  style={styles.textInputStyle}

                  placeholder='手机号'/>
          </View>

          <View style={styles.textInputViewStyle}>
              <TextInput
                  style={styles.textInputStyle}
                  placeholder='密码'
                  secureTextEntry={true}/>
          </View>


          <TouchableOpacity onPress={()=>{alert('点击登录')}}>
              <View style={styles.textLoginViewStyle}>
                  <Text style={styles.textLoginStyle}>登录</Text>
              </View>
          </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        //设置占满屏幕
        flex: 1,
        // backgroundColor: 'black',
        marginTop: 140,

    },
    //包裹输入框View样式
    textInputViewStyle: {
        //设置宽度减去30将其居中左右便有15的距离
        width: width - 30,
        height: 45,
        //设置圆角程度
        borderRadius: 18,
        //设置边框的颜色
        borderColor: 'blue',
        //设置边框的宽度
        borderWidth: 1,
        //内边距
        paddingLeft: 10,
        paddingRight: 10,
        //外边距
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        //设置相对父控件居中
        alignSelf: 'center',


    },
    //输入框样式
    textInputStyle: {
        width: width - 30,
        height: 35,
        paddingLeft: 8,
        backgroundColor: '#00000000',
        // alignSelf: 'center',
        //根据不同平台进行适配
        marginTop: Platform.OS === 'ios' ? 4 : 8,
    },

    //登录按钮View样式
    textLoginViewStyle: {
        width: width - 30,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //登录Text文本样式
    textLoginStyle: {
        fontSize: 18,
        color: 'white',


    },




});
