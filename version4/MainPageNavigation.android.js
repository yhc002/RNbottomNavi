import React, {Component} from 'react';
import { View, StyleSheet,Button} from 'react-native';
import BottomNavigation, {
    IconTab,
    Badge
} from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';
import Icon1Event from "./Scenes/Icon1Event";
import Icon2Event from "./Scenes/Icon2Event";
import Icon3Event from "./Scenes/Icon3Event";
import Icon4Event from "./Scenes/Icon4Event";
import Icon5Event from "./Scenes/Icon5Event"



import {createAppContainer,createBottomTabNavigator,createStackNavigator} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


let Navigator =  createMaterialBottomTabNavigator({
        Home: { screen: Icon1Event},
        Order: { screen: Icon2Event },
        Bonus: { screen: Icon3Event},
        MyPage: { screen: Icon4Event},
        Settings: { screen: Icon5Event},
    }
);

let AppContainer = createAppContainer(Navigator);

export default AppContainer




