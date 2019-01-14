import {Text, View} from "react-native";
import React from "react";

class Order {
  constructor(name, start, destination,sendDate,receiveDate) {
    this.name = name;
    this.start=start;
    this.destination=destination;
    this.sendDate=sendDate;
    this.receiveDate=receiveDate;
  }
  orderReview(){
    return(
      <View style={{backgroundColor: '#F5F'}}>
        <Text>맡길 장소: {this.start}</Text>
        <Text>도착 장소: {this.destination}</Text>
        <View style={{margin:4}}/>
        <Text>맡길 시간: {this.sendDate.toLocaleString()}</Text>
        <Text>찾을 시간: {this.receiveDate.toLocaleString()}</Text>
      </View>
    )
  }
  setFromObject(ob){
    this.name = ob.name;
    this.start=ob.start;
    this.destination = ob.destination;
    this.sendDate=ob.sendDate;
    this.receiveDate=ob.receiveDate;
  }

  static fromObject(ob) {
    let o = new Order(ob.name,ob.start,ob.destination,ob.sendDate,ob.receiveDate);
    o.setFromObject(ob);
    return o;
  }
}

export default Order