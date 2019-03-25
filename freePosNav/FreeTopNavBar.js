/*
* 任意位置导航栏
*
* */


import React from 'react'
import {createStackNavigator, createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import Detail from './components/Detail'
import Logistics from './components/message/Logistics'
import Messages from './components/message/Messages'
import Discount from './components/message/Discount'
import Subscribe from './components/message/Subscribe'

const TopNavigator = createMaterialTopTabNavigator({
    Logistics:{
        screen:Logistics,
        navigationOptions:{
            title:"物流"
        }
    },
    Messages:{
        screen:Messages,
        navigationOptions:{
            title:"通知"
        }
    },
    Discount:{
        screen:Discount,
        navigationOptions:{
            title:"优惠"
        }
    },
    Subscribe:{
        screen:Subscribe,
        navigationOptions:{
            title:"订阅",
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'normal',
            },
        }
    }
},{
    animationEnabled:false,
    initialRouteName:"Subscribe",
    backBehavior:"none",
    order:["Discount","Logistics","Subscribe","Messages"],
    tabBarOptions:{
        activeTintColor:"red",
        inactiveTintColor:"yellow",
        pressColor:"red",
        scrollEnabled:true,
        tabStyle:{
            //borderColor:"blue",
            borderWidth:2,
            height:50,
            width:150,
            marginTop:100,

        },
        indicatorStyle:{
            backgroundColor: "red",
            height:5
        },
        labelStyle:{
            backgroundColor:"black"
        },
        style:{
            backgroundColor:"gray"
        }
    }
});

const StackNavigator = createStackNavigator({
    Detail:{
        screen: Detail,
        navigationOptions: {
            title: "详情页"
        }
    },
    Message:{
        screen:TopNavigator,
        navigationOptions:{
            title:"消息"
        },
    }
},{
    initialRouteName:"Detail",
    headerLayoutPreset:"center"
})

export default createAppContainer(StackNavigator)
