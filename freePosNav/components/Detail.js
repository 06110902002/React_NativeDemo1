import React from 'react'
import {View, Text, Button} from 'react-native'

export default class Detail extends React.Component{
    render(){
        return (
            <View>
                <Text>Detail</Text>
                <Button title={'打开消息页面'} onPress={()=>{
                    this.props.navigation.navigate("Message")
                }}/>
            </View>
        )
    }
}

