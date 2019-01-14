import React, {Component} from 'react';

import Icon1Event from "./Scenes/Icon1Event";
import Icon2Event from "./Scenes/Icon2Event";
import Icon3Event from "./Scenes/Icon3Event";
import Icon4Event from "./Scenes/Icon4Event";
import Icon5Event from "./Scenes/Icon5Event"

import {createAppContainer,createBottomTabNavigator,createStackNavigator} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

const icons = [
  <Icon size={25} color="black" name={'home'} />,
  <Icon size={25} color="black" name={'suitcase'} />,
  <Icon size={25} color="black" name={'map'} />,
  <Icon size={25} color="black" name={'user'} />,
  <Icon size={25} color="black" name={'gear'} />,
]

let Navigator =  createMaterialBottomTabNavigator({
        Home: { screen: Icon1Event, navigationOptions:{tabBarColor:"#388E3C", tabBarIcon: icons[0]}},
        Order: { screen: Icon2Event, navigationOptions:{tabBarColor:"#01794C", tabBarIcon: icons[1]}},
        Map: { screen: Icon3Event, navigationOptions:{tabBarColor:"#6A1B9A", tabBarIcon: icons[2]}},
        MyPage: { screen: Icon4Event, navigationOptions:{tabBarColor:"#1565C0", tabBarIcon: icons[3]}},
        Settings: { screen: Icon5Event, navigationOptions:{tabBarColor:"#1C0", tabBarIcon: icons[4]}},
    }
);

let AppContainer = createAppContainer(Navigator);

export default AppContainer




