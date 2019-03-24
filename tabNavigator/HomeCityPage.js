import React from 'react';
import {Button, View, Text, StyleSheet,Image} from 'react-native';
import { createAppContainer,createBottomTabNavigator,createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import MainScreen from './Main'
import MesageScreen from './Message'


//创建页面导航器
const BottomTabNavigator = createBottomTabNavigator({
    MainScreen: {
        screen:MainScreen,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({focused,tintColor}) =><Image
                source={focused? require('../imgs/main_store_passred.png') : require('../imgs/main_store_normal.png')}
                style={styles.tabIconStyle}
            />,

        }
    },
    MsgScreen: {
        screen:MesageScreen,
        navigationOptions:{
            tabBarLabel:'消息',
            tabBarIcon:({focused,tintColor}) =>(
                <Image
                    source={focused? require('../imgs/main_store_passred.png') : require('../imgs/main_store_normal.png')}
                    style={styles.tabIconStyle}
                />

            ),
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },

});

const RootStack = createStackNavigator({
    HomeTab: {
        screen: BottomTabNavigator,
        // navigationOptions: {
        //     header: null,
        // }
    }
}, {
    /* 主屏幕的标题配置现在在这里 */
    // headerMode: 'none',
    // navigationOptions: ({navigation}) => ({
    //     title: navigation.state.routeName,
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff000',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // })
});


const AppContainer = createAppContainer(RootStack);

export default class HomeCityPage extends React.Component {
    render() {
        return <AppContainer />;
    }
}



const styles = StyleSheet.create({
    tabIconStyle: {
        width:20,
        height:20,
        resizeMode:'contain',
    },
});