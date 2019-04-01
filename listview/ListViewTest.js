import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    RefreshControl,
    View,
    Alert,
    Button,
    FlatList,
    ActivityIndicator
} from 'react-native';

import RefreshListView from './Refresh/RefreshListView';
import RefreshState from './Refresh/RefreshState';

var data = {
    "result": [
        {
            "fullName": "张三",
            "email": "e.moore@thompson.org",
            "time": "2018-10-10"
        },
        {
            "fullName": "李四",
            "email": "r.jackson@johnson.edu",
            "time": "2018-10-10"
        },
        {
            "fullName": "王五",
            "email": "c.perez@lewis.org",
            "time": "2018-10-10"
        }

    ]
};
const CITY_NAMES = ['北京', '上海', '广州','杭州', '苏州'];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class ListViewTest extends Component<Props> {
    constructor(props) {
        super(props);
        // 创建datasource数据源

        this.state = {
            // 用相应的clone方法设置datasource的初始值
            dataSource: ds.cloneWithRows(data.result),//data.result为模拟的数据或服务端得到的数据
            isLoading: true,
            noMoreData:false,
            dataArray: CITY_NAMES//初始数据
        }
        this.onLoad()
    }

    componentDidMount() {
        this.listView.beginHeaderRefresh();
    }

    renderRow(item) {
        return <View style={styles.row}>
            <TouchableOpacity onPress={() => {//点击一行显示姓名，要用到TouchableOpacity组件

                Alert.alert('你单击了：' + item.fullName);
            }}>
                <Text style={styles.text1}>姓名：{item.fullName}</Text>
                <Text style={styles.text2}>邮箱：{item.email}</Text>
                <Text style={styles.text3}>time：{item.time}</Text>
            </TouchableOpacity>
        </View>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        console.log('62-----------:'+rowID);
        if(rowID == data.result.length - 1){
            return null;
        }
        return <View key={rowID} style={styles.line}></View>
    }

    renderFooter() {

        if(this.state.noMoreData){
            return null;
        }
        // return <Image style={{width:400,height:100}} source={{uri:'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png'}}></Image>
        return <View style={{justifyContent: "center", height: 20, alignItems: 'center'}}>
            <Text style={styles.tip}>我是有底线的</Text>
        </View>
    }

    // 刷新的状态，时间2s
    onLoad() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 2000)
    }

    // 渲染listView
    render() {
        return (
            <View style={styles.container}>

                <RefreshListView
                    ref={(ref) => {this.listView = ref}}
                    data={this.state.dataArray}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={this._renderEmptyView}
                    onHeaderRefresh={() => { this.pullDownRefresh() }}
                    onFooterRefresh={() => { this.loadMore() }}
                />

                <View style={styles.clickButtonStyle}>
                    <Button title={"删除"} color={'white'} onPress={()=>this.deleteData()}/>
                </View>

                <View style={styles.clickButtonStyle}>
                    <Button title={"增加"} color={'white'} onPress={()=>this.addData()}/>
                </View>

            </View>
        );
    }

    _renderEmptyView = (item) => {
        return <View/>
    };

    pullDownRefresh(){
        this.addData();
    }

    genIndicator= ()=>{ //底部加载(一个圆圈)
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    };

    _renderItem= (data)=> {//自定义的渲染组件
        return <View style={styles.item}>
            <Text syle={styles.text}>{data.item}</Text>
        </View>
    };






    loadMore(){
        setTimeout(() => {
            this.setState({
                noMoreData: true,
            },()=>{
                this.listView.endRefreshing(RefreshState.NoMoreData);
                console.log("107--------loadmore");
            })
        }, 2000);
        console.log("107--------loadmore");

    };

    deleteData(){

        var headEle = data.result.pop();
        this.setState({
            dataSource: ds.cloneWithRows(data.result),
        });
        console.log('129----------:'+headEle);

    };

    addData(){
        var data1 = {
            "result": [
                {
                    "fullName": "1",
                    "email": "e.moore@thompson.org",
                    "time": "2014-10-10"
                },
                {
                    "fullName": "2",
                    "email": "r.jackson@johnson.edu",
                    "time": "2017-10-10"
                },
                {
                    "fullName": "3",
                    "email": "c.perez@lewis.org",
                    "time": "2016-10-10"
                },
                {
                    "fullName": "王五23423",
                    "email": "c.perez@lewis.org",
                    "time": "2019-10-10"
                }

            ]
        };
        // let dataCount = data.result.length;
        //
        // for(let i = 0; i < data1.result.length; i ++){
        //
        //     var tmp = new Test();
        //     tmp.fullName = data1.result[i].fullName;
        //     tmp.email = data1.result[i].email;
        //     tmp.time = data1.result[i].time;
        //     console.log('164--------:'+tmp.fullName);
        //     data.result.push(tmp);
        //
        // }

        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(data.result),
        },()=>{

            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.CanLoadMore);
                console.log('226-----------:下拉刷新');
            }, 2000)

        });



    };
}

class Test {


    constructor(){
        this.fullName = '';
        this.email = '';
        this.time = '';
    }
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop:50,
        height:400,

    },
    text1: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 7
    },
    text2: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 7
    },
    text3: {
        fontSize: 14,
        marginLeft: 250,
        marginTop: -16,
    },
    icon: {
        height: 22,
        width: 22,
    },
    row: {
        height: 60,
    },
    line: {
        height: 1,
        backgroundColor: '#F0F0F0'
    },
    tip: {
        fontSize: 10
    },

    clickButtonStyle: {
        margin: 15,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#7FFF00',
    },
});
