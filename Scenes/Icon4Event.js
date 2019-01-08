import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';

export default class Icon4Event extends Component {
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
                <View style={{margin:20}} />
            </ScrollView>
        )
    }
}