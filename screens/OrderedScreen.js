import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const OrderedScreen = props => {
  let orders = useSelector(state => state.cart.orders);

  for (let i = 0; i < orders.length - 1; i++) {
    for (let j = i + 1; j < orders.length; j++) {
        if (orders[i].id === orders[j].id) {
            orders.splice(i, 1);
        }
    }
  }

  const totalOrder = orders.reduce((cur, acc) => {
      console.log(cur);
  }, 0)
  console.log(orders);

  return (null)
};

OrderedScreen.navigationOptions = navData => {
  return {
    headerTitle: "MY ORDERS"
  };
};

export default OrderedScreen;
