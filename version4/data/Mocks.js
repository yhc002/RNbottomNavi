import Order from './Order'
import OrderList from './OrderList'

let mockOrderList = new OrderList("MockList");

mockOrderList.addOrder( new Order("MockN1","MockS1","MockD1",new Date(2018,3,12,4,30),new Date(2018,3,12,4,30)));
mockOrderList.addOrder( new Order("MockN2","MockS2","MockD2",new Date(2019,1,11,2,30), new Date(2019,3,12,5,30)));
mockOrderList.addOrder( new Order("MockN3","MockS3","MockD3",new Date(2019,2,11,5,30),new Date(2019,2,13,7,40)));

export {mockOrderList}