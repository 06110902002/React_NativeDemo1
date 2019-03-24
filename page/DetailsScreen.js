import React from 'react';
import {Button, View, Text, StyleSheet, Platform} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export default class DetailsScreen extends React.Component {

    state = {count:0};

    //设置导航栏属性
    static navigationOptions = (props) => {
        const params = props.navigation.state.params;
        return {
            title: '电影详情页',
            headerBackTitleStyle:styles.backBtnStyle,       //返回按钮的样式
            headerTitleStyle:styles.headerTitleStyle,

            headerRight: (                        //通过params为按钮绑定increase方法
                <Button onPress = { params.increase } title="导航栏与页面通讯" />
            ),
        };
    };

    componentWillMount() {                    //通过setParams将increase方法绑定到_increase

        this.props.navigation.setParams({ increase: this._increase });
    }

    _increase=()=>{                           //设置state.count+1

        this.setState(preState=>{return {count:preState.count+1}});
    };

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

                <Text>你好，页面传参数：{data.userName}!,{data.userInfo}</Text>

                <Text>头部与组件进行通讯，计数为：{this.state.count}</Text>

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

    backBtnStyle: {
        fontSize: 12,
        color: 'white',
    },

    headerTitleStyle: {
        fontSize: 12,
        color: '#a45678',
    },




});
