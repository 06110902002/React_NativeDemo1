import React from 'react';
import {Button, View, Text, StyleSheet,Image} from 'react-native';
import { Alert } from 'react-native'
import {createBottomTabNavigator} from "react-navigation";


export default class Main extends React.Component {

    static navigationOptions = {
         title: 'Page1',
     };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>BottomTabNavigator</Text>

                <Button
                    title="演示调用函数2017"
                    onPress={foo(23)}
                />

                <Image
                    source={require('./main_my_pressed.png') }
                    style={styles.tabIconStyle}
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