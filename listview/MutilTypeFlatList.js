/**
 * Description:利用FlatList实现多种样式列表
 *
 * Author: zoe
 * Time: 2018/4/26 0026
 */
import {
    View,
    Image,
    Button,
    Text,
    ToastAndroid,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Dimensions,
    Alert
} from "react-native";

import React, { PureComponent } from "react";

/**
 * 列表的数据源
 *
 * @type {*[]}
 */
const dataList = [
    {
        key : 'Text',
        type : 1,
        content : 'THIS IS TEXT'
    },
    {
        key : 'Image',
        type : 2,
        content : '../imgs/imgs/qinghua.png'
    },
    {
        key : 'Button',
        type : 3,
        content : 'THIS IS BUTTON'
    },
];

export default class MultiTypeDemo extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={dataList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item) => item.key;

    /**
     * 根据数据中的type，判断该显示什么布局
     *
     * @param item
     * @returns {*}
     */
    renderItem({ item }) {
        if (item.type === 1) {
            return (
                <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.clickItem(item)}>
                    <Text style={styles.txt}>{item.content}</Text>
                </TouchableOpacity>
            )
        } else if (item.type === 2) {
            return (
                <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.clickItem(item)}>
                    <Image
                        style={styles.img}
                        source={item.content}
                    />
                </TouchableOpacity>
            )
        }else if (item.type===3){
            return (
                <Button
                    activeOpacity={1}
                    onPress={() => this.clickItem(item)}
                    title={item.content}
                    color={'#20bce4'}
                />
            )
        }
    }

    /**
     * item的点击事件
     *
     * @param item
     */
    clickItem(item) {
        Alert.alert(item.key);
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding:10,
        marginTop:40,
        backgroundColor : 'white'
    },
    item : {
        flex:1,
        flexDirection:'row',
        width : Dimensions.get('window').width,
        justifyContent:'center',
        alignSelf:'flex-start',
        backgroundColor : 'white',
        borderBottomWidth : 1,
        borderBottomColor : '#890762'
    },
    txt : {
        padding : 10,
        fontSize : 18,
    },
    img : {
        margin:10,
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').width/3*2,
        resizeMode:'cover'
    }
});