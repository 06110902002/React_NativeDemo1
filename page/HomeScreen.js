import React from 'react';
import { Button, View, Text } from 'react-native';
import { Alert } from 'react-native'


import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details2"
                    onPress={() => this.props.navigation.navigate('Details',{
                        userName:'参数一',
                        userInfo:'参数二'
                    })}
                />

                <Button
                    title="演示调用函数2017"
                    onPress={foo(23)}
                />


            </View>
        );
    }
}

const foo = function(a) {
    console.log('26---------foo function calling', a)
}