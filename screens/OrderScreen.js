import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { connect, useDispatch } from 'react-redux';

import COLORS from '../constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import Item from '../components/Item';
import { orderCartItems } from '../store/actions/cart'


const OrderScreen = props => {
  const cartItems = props.cart.cartItems;
  const dispatch = useDispatch();

  const orderItems = items => orderCartItems(items);

    return (
      <View>
        <View style={styles.order}>
          <Text style={styles.amount}>Total Amount: <Text style={styles.price}>${props.cart.totalAmount}</Text></Text>
          <View style={styles.button}>
            <Button color={COLORS.whiteBlue} title='Order Now' onPress={ () => dispatch(orderItems(cartItems)) }/>
          </View> 
        </View>
        <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={itemData => <Item
          quantity={itemData.item.quantity} 
          price={itemData.item.price}
          name={itemData.item.name}
          nameLength={itemData.item.name.length}
          id={itemData.item.id}
         />} 
        />
      </View>
    )
};

OrderScreen.navigationOptions = navData => {
  return {
    headerTitle: 'MY CART'
  }
}

const styles = StyleSheet.create({
  order: {
    flexDirection: 'row',
    borderColor: COLORS.whiteGrey,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    padding: 10
  },
  amount: {
    fontSize: 16
  },
  price: {
    fontSize: 18,
    marginLeft: 20
  },
  button: {
    alignSelf: "flex-end"
  },
});

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(OrderScreen);