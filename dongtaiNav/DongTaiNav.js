import React,{Component} from 'react'
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation'
import PopularPages from "./PopularPages";

export default class Popular extends Component{
    static createTabs(){
        //tab数据源
        const languages = ['Vue','React','Angular','jQuery','JavaScript']
        let tabPages = {}
        languages.map((value,index)=>{
            tabPages[value]={
                // 以函数的方式书写、这样写不行  screen:<PopularPages tabName={value}/>
                screen:props => <PopularPages {...this.props} tabName={value}/>
            }
        });
        return tabPages
    }
    topNavigator(){
        let topTabs = createMaterialTopTabNavigator(
            Popular.createTabs(),
            {
                lazy:true,
                tabBarOptions:{
                    upperCaseLabel:false,
                    scrollEnabled:true,//tabs超出屏幕宽度可以滚动
                    tabStyle:{
                        minWidth:100,
                        marginTop:100,
                    }
                }
            }
        );
        return createAppContainer(topTabs)
    }
    render(){
        let Pages = this.topNavigator();
        return <Pages/>
    }
}


