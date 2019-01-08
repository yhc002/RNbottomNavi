import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Alert
} from 'react-native';

export default class Icon2Sub3 extends Component {
    constructor(props) {
        super(props);
        this._onDone=this._onDone.bind(this)
    }

    _onDone(){
        Alert.alert("예약이 완료되었습니다.")
        this.props.onNextPress()
    }
    render()
    {
        return(
            <View>
                <Text>예약 정보 정리</Text>

                <Button title="Done" onPress={this._onDone}/>
                <View style={{margin:7}} />
                <Button title="previous" onPress={this.props.onPreviousPress}/>
            </View>
        )
    }
}