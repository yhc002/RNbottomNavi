import React, { Component } from 'react';

import Login from "./Login"
import Signup from "./Signup"

export default class authentication extends Component{
    state = {
        toSignup: false
    }
    render(){
        if(this.state.toSignup)
        {
            return(<Signup
                onExitPress={() => this.setState({toSignup: false})}
            />)
        }
        else
            return(<Login
                onLoginPress={() => this.props.onLoginPress()}
                onSignupPress={() => this.setState({toSignup: true})}
            />)
    }
}