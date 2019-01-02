import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    state = {
        toSignUp: false
    }

    render() {
        if(this.props.toSignUp)
            return(<ScrollView style={{padding: 20}}>
                <Text
                    style={{fontSize: 27}}>
                    Create New Account
                </Text>
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
                    onPress={() => this.setState({toSignUp:false})}
                    title="join"
                />
                <View style={{margin:7}} />
                <Button
                    onPress={this.setState({toSignUp:false})}
                    title="go back"
                />
            </ScrollView>)
        else
            return (
                <ScrollView style={{padding: 20}}>
                    <Text
                        style={{fontSize: 27}}>
                        Login
                    </Text>
                    <TextInput placeholder='Username' />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <View style={{margin:7}} />
                    <Button
                        onPress={this.props.onLoginPress}
                        title="Submit"
                    />
                    <View style={{margin:7}} />
                    <Button
                        onPress={() => this.setState({toSignUp:true})}
                        title="Sign up"
                    />
                </ScrollView>
            )
    }
}