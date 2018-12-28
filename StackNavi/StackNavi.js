import React from 'react';
import { View, StyleSheet, Image, WebView } from 'react-native';
import BottomNavigation, {
    IconTab,
    Badge
} from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';
import Icon1Event from "../Scenes/Icon1Event";
import Icon2Event from "../Scenes/Icon2Event";

import {createStackNavigator, createAppContainer} from "react-navigation"


let navigator = createStackNavigator({
    Home: { screen: Icon1Event},
    Icon2: { screen: Icon2Event},
});

export default createAppContainer(navigator);