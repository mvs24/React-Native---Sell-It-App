import React from 'react';
import {View} from 'react-native';
import { useSelector } from 'react-redux';

const OrderedScreen = props => {
    const cart = useSelector(state => state.cart);
    console.log(cart);
    return ( null )
}

export default OrderedScreen;