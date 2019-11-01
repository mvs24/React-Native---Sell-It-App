import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'


const OrderScreen = props => {
  console.log(props.cart);
    return (
        null
    )
};

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(OrderScreen);