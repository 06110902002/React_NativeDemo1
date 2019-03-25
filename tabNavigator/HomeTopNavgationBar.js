/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation'
import  MainScreen  from './Main'
import WebScreen from '../page/ListScreen'
import FindTab from './Message'


const CreateTab = createMaterialTopTabNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions: () => ({
            tabBarLabel: '首页',
        })
    },
    Find: {
        screen: FindTab,
        navigationOptions: () => ({
            tabBarLabel: '发现',
        })
    }
}, {
    initialRouteName: 'Find',
    //tabBarPosition: 'top',
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
    }
})

const StacksOverTabs = createStackNavigator({
    Root: {
        screen: CreateTab,
        navigationOptions: {
            header: () => null,
        }
    },
    WebView: {
        screen: WebScreen,
        navigationOptions: {
            title: '熊孩宝测试',
        },
    }
});

const StacksOverTab = createAppContainer(StacksOverTabs)

export default class App extends Component {
    render() {
        return (
            <StacksOverTab />
        );
    }
}