import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import COLORS from '../constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import Item from '../components/Item';


const OrderScreen = props => {
  const cartItems = props.cart.cartItems;
    return (
      <View>
        <View style={styles.order}>
          <Text style={styles.amount}>Total Amount: <Text style={styles.price}>${props.cart.totalAmount}</Text></Text>
          <View style={styles.button}>
            <Button color={COLORS.whiteBlue} title='Order Now' onPress={() => {}}/>
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
    marginLeft: 120
  },
});

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(OrderScreen);