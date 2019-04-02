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
import ItemViewMgr from "./Refresh/view/ItemViewMgr";
import TitleModel from "./Refresh/model/TitleModel";
import ModelType from "./Refresh/model/ModelType";
import BaseModel from "./Refresh/model/BaseModel";
import UniversityModel from "./Refresh/model/UniversityModel";

var testArray = [];

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class LXBMultiTypeFlatList extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            noMoreData:false,
            dataArray: this.initData(),
        }
    }


    initData(){

        for(let i = 0 ; i < 5; i++){
            if( i % 2 === 0){
                var title = new TitleModel();
                title.titleContent = 'title_'+i;
                testArray.push(title);
            }else{
                var university = new UniversityModel();
                university.universityName = '清华大学';
                university.place = '北京';
                testArray.push(university);
            }

        }
        return testArray;
    };



    componentDidMount() {
        this.listView.beginHeaderRefresh();
    }


    // 渲染listView
    render() {
        return (
            <View style={styles.container}>

                <RefreshListView
                    ref={(ref) => {this.listView = ref}}
                    data={this.state.dataArray}
                    renderItem={this._renderItem.bind(this)}
                    ListEmptyComponent={this._renderEmptyView}
                    onHeaderRefresh={() => { this.pullDownRefresh() }}
                    onFooterRefresh={() => { this.loadMore() }}
                />

            </View>
        );
    }

    _renderEmptyView = (item) => {
        return <View/>
    };

    pullDownRefresh(){
        this.setState({
            isLoading: true,
        },()=>{

            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.Idle);
                console.log('226-----------:下拉刷新');
            }, 2000)

        });
    }

    _renderItem= (data)=> {
        return (
            <ItemViewMgr
                itemType = {data.item.getItemType()}
                ItemData = {data.item}      //属性传值
                onItemClickListener = {(itemData) =>this.onClickListener(itemData)}
            />
        )

    };

    onClickListener(itemData){
        Alert.alert(itemData.universityName);
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


}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop:50,
        height:400,

    },


    clickButtonStyle: {
        margin: 15,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#7FFF00',
    },
    item: {
        backgroundColor: '#c5ecff',
        height: 50,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,//漂浮的效果
        borderRadius:5,//圆角
    },
});
