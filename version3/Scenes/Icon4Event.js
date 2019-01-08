import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Icon4Event extends Component {
    _showList() {
        return this.props.orderList.map(function(order, i){
            return(
                <View key={i} >
                    <View style={{backgroundColor: '#F5F'}}>
                        <Text>name:{order.name}</Text>
                        <Text>destination: {order.destination}</Text>
                    </View>
                    <View style={{margin:7}} />
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    MyPage
                </Text>
                <Text
                    style={{fontSize: 27}}>
                    회원 정보
                </Text>
                <Text
                    style={{fontSize: 27}}>
                    주문 내역
                </Text>
                {this._showList()}
                <View style={{margin:20}} />
            </ScrollView>
        )
    }
}