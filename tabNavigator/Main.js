import React from 'react';
import {Button, View, Text, StyleSheet,Image} from 'react-native';
import { Alert } from 'react-native'
import {createBottomTabNavigator} from "react-navigation";


export default class Main extends React.Component {

    //用于导航器内的屏幕
    // static navigationOptions = {
    //     // tabBarVisible: true,//true或false显示或隐藏标签栏，如果未设置则默认为true。
    //     // tabBarAccessibilityLabel: '', //选项卡按钮的辅助功能标签。当用户点击标签时，屏幕阅读器会读取此信息。如果您没有选项卡的标签，建议设置此项。
    //     // tabBarTestID: '',//用于在测试中找到此选项卡按钮的ID。
    //
    //     //通用标题可以用作备用headerTitle和tabBarLabel。
    //     title: '档案',
    //     //设置tabBarButton的图像
    //     tabBarIcon: ({focused, horizontal, tintColor}) => {
    //         return <Image
    //             source={require('./main_my_normal.png')}
    //             style={{width: 22, height: 22, tintColor: tintColor}}
    //         />
    //     },
    //     //回调处理新闻事件; 参数是一个对象，包含：navigation：屏幕导航道具  defaultHandler：tab按下的默认处理程序
    //     tabBarOnPress: (event) => {
    //         event.defaultHandler();//调用组建内默认的实现方法
    //         console.log('27---------点击了某个tabBatBtn' + event);
    //
    //     },
    //
    //     // //tabBarButton  自定义button
    //     // //这个和title与tabBarIcon  冲突
    //     // tabBarButtonComponent: () => {
    //     //
    //     // },
    //
    //
    // }

    //设置导航栏属性
    static navigationOptions = (props) => {
        return {
            title: '电影详情页',
            headerBackTitleStyle:styles.backBtnStyle,       //返回按钮的样式
            headerTitleStyle:styles.headerTitleStyle,

        };
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
                <Button
                    title="Go to MsgScreen"
                    onPress={() => this.props.navigation.navigate('MsgScreen')}
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