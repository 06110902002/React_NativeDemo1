import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './page/HomeScreen'
import DetailsScreen from  './page/DetailsScreen'

import MoveListPage from './page/ListScreen'


//创建页面导航器
const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
        MoveListScreen:{
            screen:MoveListPage,
        },
    },
    {
        initialRouteName: 'Home',
    }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}