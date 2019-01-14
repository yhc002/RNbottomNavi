import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import Order from "../data/Order"
import {mockOrderList} from "../data/Mocks"

export default class Icon2Sub3 extends Component {
  constructor(props) {
    super(props);
    this._onDone=this._onDone.bind(this);
  }

  _onDone(){ //결제 완료 시 실행할 함수
    let currentOrder=this.props.navigation.getParam('currentOrder'); //주문 정보. JSON 형식.
    let currentOrderObject=new Order(
      "new order",currentOrder.start,currentOrder.destination,currentOrder.sendDate,currentOrder.receiveDate) //order 자료형(data 디렉토리) 주문 정보
    mockOrderList.addOrder(currentOrderObject);
    Alert.alert("예약이 완료되었습니다.");
    this.props.navigation.popToTop();
  }
  render()
  {
    let currentOrder=this.props.navigation.getParam('currentOrder');
    return(
      <View>
        <Text>예약 정보 정리</Text>
        <View style={{margin:7}} />
        <Text>맡길 장소: {currentOrder.start}</Text>
        <Text>찾을 장소: {currentOrder.destination}</Text>
        <Text>맡길 시간: {currentOrder.sendDate.toLocaleString()}</Text>
        <Text>찾을 시간: {currentOrder.receiveDate.toLocaleString()}</Text>
        <Button title="결제하기" onPress={this._onDone}/>
        <View style={{margin:7}} />
        <Button title="취소" onPress={()=>this.props.navigation.popToTop()}/>
      </View>
    )
  }
}