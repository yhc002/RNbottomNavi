import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    CheckBox
} from 'react-native';

export default class Signup extends Component {
    state = {
        agree: false
    }
    render(){
        return(<ScrollView style={{padding: 20}}>
            <Text
                style={{fontSize: 27}}>
                Create New Account
            </Text>
            <ScrollView style={{padding: 10}}>
                <Text
                    style={{fontSize: 20}}>
                    {`아래의 회원가입 규정에 동의하십니까?\nBlahBlahBlahBlahBlahBlah BlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlah
                `}
                </Text>
            </ScrollView>
            <CheckBox
                value={this.state.checked}
                onValueChange={() => this.setState({checked: !this.state.checked})}
                onChange={() => this.setState({agree: !this.state.agree})}
            />
            <TextInput placeholder='Username' />
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
            />
            <TextInput
                placeholder='Repeat Password'
                secureTextEntry={true}
            />
            <View style={{margin:7}} />
            <Button
                onPress={this.props.onExitPress}
                disabled={!this.state.agree}
                title="join"
            />
            <View style={{margin:7}} />
            <Button
                onPress={this.props.onExitPress}
                title="go back"
            />
        </ScrollView>)
    }
}