import React, {Component} from 'react';
import {Image, FlatList, TouchableHighlight, StyleSheet, Text, View} from 'react-native';


import Profile from '../ProfileScreen.js';

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

type Props = {};

export default class ListScreen extends Component {
    static navigationOptions = {
        title: '电影列表',
    };
    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        this.state = {
            data: [],
            loaded:false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
        this.renderMovie =this.renderMovie.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({
                    data:this.state.data.concat(responseData.movies),
                    loaded:true,
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (!this.state.data) {
            return this.renderLoadingView();
        }
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
            />
        );
    }

    pressToDetail(rowID:number){
        this.props.navigation.navigate('Profile',{
            movieID:rowID,
        });
    }

    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据。。。
                </Text>
            </View>
        );
    }

    renderMovie({item}){
        console.log({item});
        return (
            <TouchableHighlight onPress={()=>this.pressToDetail(item.id)}>
                <View style={styles.container}>
                    <Image style={styles.thumbnail}  source={{uri:item.posters.thumbnail}} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title&&styles.test}>{item.title}</Text>
                        <Text style={styles.year}>{item.year}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ccc',
        borderStyle:'solid',
        padding:5,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{width:4,height:4},
        elevation: 4,
    },
    thumbnail:{
        width:53,
        height:81
    },
    rightContainer:{
        flex:1,
        paddingLeft:10,
    },
    title:{
        fontSize:20,
        marginBottom:10,
    },
    year:{
        color:'#ccc'
    },
    list:{
        paddingTop:20,
        backgroundColor:'#F5FCFF',
    },
    test:{
        color:'red'
    }
});

