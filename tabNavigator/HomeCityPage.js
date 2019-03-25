import React from 'react';
import {Button, View, Text, StyleSheet, Image, Platform} from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json

import MainScreen from './Main'
import MesageScreen from './Message'


//创建页面导航器
const BottomTabNavigator = createBottomTabNavigator({
    // MainScreen: {
    //     screen:MainScreen,
    //     navigationOptions:{
    //         //tabBarLabel:'首页',
    //         tabBarIcon:({focused,tintColor}) =>{
    //             return <Image
    //                 source={focused? require('../imgs/main_store_passred.png') : require('../imgs/main_store_normal.png')}
    //                 style={styles.tabIconStyle}
    //             />
    //
    //         },
    //         tabBarOnPress: (event) => { // 使用tabBarOnPress点击事件
    //             event.defaultHandler();//调用组建内默认的实现方法,这句一定要加上，不然页面不能切换回来
    //             onTabbarClickListener(23);
    //         },
    //         title: "账户",    //与 tabBarLabel 效果一样
    //
    //
    //
    //     }
    // },
    // MsgScreen: {
    //     screen:MesageScreen,
    //     navigationOptions:{
    //         tabBarLabel:'消息',
    //         tabBarIcon:({focused,tintColor}) =>(
    //             <Image
    //                 source={focused? require('../imgs/main_store_passred.png') : require('../imgs/main_store_normal.png')}
    //                 style={styles.tabIconStyle}
    //             />
    //
    //         ),
    //
    //     }
    // }

    //如果要设置每个页面的顶部标题栏，可使用下面这种创建方式，如果不需要的话，可以使用上面的创建方式
    MainScreen: createStackNavigator(
        // RouteConfigs
        {
            screen: MainScreen,
        },
        // StackNavigatorConfig
        {
            headerMode: 'screen',
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
            navigationOptions: {
                title: '商城',
                tabBarIcon: ({focused, tintColor}) => {
                    return <Image
                        source={focused ? require('../imgs/main_store_passred.png') : require('../imgs/main_store_normal.png')}
                        style={styles.tabIconStyle}
                    />

                },
                tabBarOnPress: (event) => { // 使用tabBarOnPress点击事件
                    event.defaultHandler();//调用组建内默认的实现方法,这句一定要加上，不然页面不能切换回来
                    onTabbarClickListener(23);
                },

            },
        },
    ),

    MsgScreen: createStackNavigator(
        // RouteConfigs
        {
            screen: MesageScreen,

        },
        // StackNavigatorConfig
        {
            headerMode: 'screen',
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#6699ff',
                },
                title: '消息',
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'normal',
                },
                tabBarIcon: ({focused, tintColor}) => (
                    <Image
                        source={focused ? require('../imgs/main_store_passred.png') : require('../imgs/main_store_normal.png')}
                        style={styles.tabIconStyle}
                    />

                ),
            },
        },
    ),


}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,

});

const RootStack = createStackNavigator({
    HomeTab: {
        screen: BottomTabNavigator,
        // navigationOptions: ({navigation}) => ({
        //     title: navigation.title,
        //     headerStyle: {
        //         backgroundColor: '#f4511e',
        //     },
        //     headerTintColor: '#fff000',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //     },
        //
        // })
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
    //
    // })

});

function onTabbarClickListener(parmas) {
    console.log('70--------:' + parmas);
}


const AppContainer = createAppContainer(BottomTabNavigator);

export default class HomeCityPage extends React.Component {
    render() {
        return <AppContainer/>;
    }
}


const styles = StyleSheet.create({
    tabIconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});