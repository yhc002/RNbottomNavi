import {WebView} from "react-native";
import React from "react";

function Icon1Event() {
    return(
    <WebView
        source={{uri: 'https://www.naver.com'}}
        style={{marginTop: 0}}
    />
    )
}

export default Icon1Event;