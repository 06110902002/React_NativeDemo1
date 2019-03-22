import React, {Component} from 'react';
import {StyleSheet,Image, Text, View} from 'react-native';

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.movieID,
            detail:null,
        };
        this.fetchData=this.fetchData.bind(this);
    }

    static navigationOptions = {
        title:'详情'
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({
                    detail:responseData.movies[1],
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render(){
        if (!this.state.detail) {
            return this.renderLoading();
        }
        return this.renderDetail(this.state.detail);
    }

    renderLoading(){
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据。。。
                </Text>
            </View>
        )
    }

    renderDetail(detail){
        console.log(detail);
        return (
            <View style={styles.container}>
                <View style={styles.grid,styles.header}>
                    <Text style={styles.headerText}>{detail.title}</Text>
                </View>
                <View style={styles.grid,styles.middle}>
                    <View style={styles.leftCell}>
                        <Image style={styles.thumbnail}  source={{uri:detail.posters.thumbnail}} />
                    </View>
                    <View style={styles.rightCell}>
                        <Text href="#">{detail.year}</Text>
                    </View>
                </View>
                <View style={styles.grid,styles.footer}>
                    <Text>Copyright MaJieing</Text>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent:'center',
        // minHeight:400,
    },
    grid:{
        display:'flex',
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'30%',
        backgroundColor:'#F5A79A'
    },
    headerText:{
        width:'70%',
    },
    leftCell:{
        backgroundColor:'#FADAC5',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    rightCell:{
        backgroundColor: '#F6B16E',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    middle:{
        height:'60%',
        flexDirection:'row',
    },
    footer:{
        backgroundColor:'#eeeeee',
        color:'#666666',
        fontSize:16,
        height:'10%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    thumbnail:{
        width:53,
        height:81
    },
});

