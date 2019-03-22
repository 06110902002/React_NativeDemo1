import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export default class DetailsScreen extends React.Component {
    render() {

        const data=this.props.navigation.state.params;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="查看电影"
                    onPress={() => this.props.navigation.navigate('MoveListScreen')}
                />

                <Text>你好，{data.userName}!,{data.userInfo}</Text>

            </View>
        );
    }
}