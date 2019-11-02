import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from '../store/actions/cart';

const Item = ({ quantity, name, price, id }) => {
    const dispatch = useDispatch();
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{quantity === 1 ? name : `${name}s`}</Text>
        <AntDesign
          style={styles.iconLeft}
          size={32}
          name="left"
          onPress={() => dispatch(decreaseItemQuantity(id))}
        />
        <View style={styles.quantity}>
          <Text>{ quantity }</Text>
        </View>
        <AntDesign
          style={styles.iconRight}
          size={32}
          name="right"
          onPress={() => dispatch(increaseItemQuantity(id))}
        />
      </View>
      <View style={styles.price}>
        <Text>${ Math.ceil(price * 100) / 100 }</Text>
      </View>
      <Ionicons
        style={{ marginRight: 15 }}
        name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
        size={24}
        onPress={() => dispatch(removeItemFromCart(id)) }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 16
  },
  iconLeft: {
    alignSelf: "center",
    marginLeft: 10
  },
  quantity: {
    fontSize: 18
  },
  iconRight: {
    alignSelf: "center"
  },
  price: {
    fontSize: 18,
    alignSelf: "center"
  }
});

export default Item;
