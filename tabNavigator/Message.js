import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import { Alert } from 'react-native'

export default class Message extends React.Component {


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>MessageScreen</Text>

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
};

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 12,
        color: '#a45678',
    },
});