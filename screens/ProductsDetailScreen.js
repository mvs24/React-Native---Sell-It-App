import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import ProductItem from '../components/ProductItem';
import COLORS from '../constants/Colors';
import { addProductToCart } from '../store/actions/cart'
import { useDispatch } from 'react-redux'

const ProductsDetail = props => {
    const productId = props.navigation.getParam('productId');
    const choosenProduct = props.products.availableProducts.filter(product => product.id === productId)[0];
    const dispatch = useDispatch();

    const addToCart = product => {
      dispatch(addProductToCart(product));
      props.navigation.navigate('Order')
    };

   return ( 
       <View>
           <ProductItem
             id={choosenProduct.id}
             userId={choosenProduct.userId}
             name={choosenProduct.name}
             imageUrl={choosenProduct.imageUrl}
             description={choosenProduct.description}
             price={choosenProduct.price}
             navigation={props.navigation}
           />
           <View style={styles.button}>
               <Button color={COLORS.whiteBlue} title="Add to Cart" onPress={() => addToCart(choosenProduct)} />
           </View>
       </View>
   )
};

const styles = StyleSheet.create({
    button: {
        width: '40%',
        marginLeft: '30%'
    }
});

ProductsDetail.navigationOptions = navData => {
    const productName = navData.navigation.getParam('productName');
    return {
        headerTitle: productName
    }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductsDetail);