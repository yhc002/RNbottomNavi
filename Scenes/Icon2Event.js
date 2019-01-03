import {Button, View, Text} from "react-native";
import React from "react";

function Icon2Event() {

    return(
        <View>
            <Text style={{fontSize: 27}}>
                Order Page
            </Text>
            <Button
                onPress={()=> console.warn("not implemented yet")}
                title="서비스 신청"
            />
        </View>
    )
}

export default Icon2Event;