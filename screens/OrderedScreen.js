import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import COLORS from "../constants/Colors";
import OrderItem from '../components/OrderItem';

const OrderedScreen = props => {
  let orders = useSelector(state => state.cart.orders);
  let totalOrder = useSelector(state => state.cart.totalOrder);

  // for (let i = 0; i < orders.length - 1; i++) {
  //   for (let j = i + 1; j < orders.length; j++) {
  //       if (orders[i].id === orders[j].id) {
  //           orders.splice(i, 1);
  //       }
  //   }
  // }

  // const totalOrder = orders.reduce((acc, cur) => {
  //   return acc + (cur.price * 1);
  // }, 0)
  console.log(orders);
  console.log(totalOrder);

  return (
      <View>
          <View style={styles.orderTotal}>
              <Text style={styles.orderText}>Total Order: <Text>{totalOrder.toFixed(2)}</Text></Text>
          </View>
          <ScrollView>
              <Text>Orders</Text>
              {orders.map(order => <OrderItem 
              // key={order.id}
              // name={order.name}
              // decription={order.decription}
              // quantity={order.quantity}
              // price={order.price}
              />)}
          </ScrollView>
      </View>
  )
};

const styles = StyleSheet.create({
    orderTotal: {
        borderWidth: 2,
        borderColor: COLORS.whiteGrey,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        padding: 15
    },
    orderText: {
        fontSize: 16
    }
})

OrderedScreen.navigationOptions = navData => {
  return {
    headerTitle: "MY ORDERS"
  };
};

export default OrderedScreen;
