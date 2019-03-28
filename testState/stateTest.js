import React, { Component, } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
} from 'react-native';


export default class StateDemo extends Component {
    render() {
        return <ChirldComponent style={styles.container} />;
    }
}


class Container extends Component {

    constructor() {
        super();
        // 设置初始状态
        this.state = {
            showText: true,
        };
    }

    render() {
        // 根据状态决定展示什么文字
        var text = (this.state.showText) ? 'Hello' : "";
        var buttonTitle = (this.state.showText) ? 'Hide' : "Show";

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity
                    onPress = {() => {
                        // 更新状态
                        this.setState(
                            previousState => {
                                return { showText: !previousState.showText };
                            }
                        );

                    }}>
                    <Text style={styles.buttonTitle}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        );
    }


}

class ChirldComponent extends Container{


    render() {
        function test(){
            console.log('52----------:');
        }

        // 根据状态决定展示什么文字
        var text = (this.state.showText) ? 'Hello2' : "";
        var buttonTitle = (this.state.showText) ? 'Hide2' : "Show2";

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity
                    onPress = {() => {
                        // 更新状态
                        this.setState(
                            previousState => {
                                return { showText: !previousState.showText };
                            }
                        );

                    }}>
                    <Text style={styles.buttonTitle}>{buttonTitle}</Text>
                </TouchableOpacity>

                <Button onPress={test()} title = '测试' style={styles.text} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
    },

    text: {
        marginTop: 200,
        fontSize: 30,
        textAlign: 'center',
        color:'#999ccb',
    },

    buttonTitle: {
        width: 70,
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'green',
    },

});
