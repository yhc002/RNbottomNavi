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
                <View style={{margin:20}} />
            </ScrollView>
        )
    }
}