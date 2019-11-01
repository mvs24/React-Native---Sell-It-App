import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ProductItem from '../components/ProductItem'

const ProductsOverview = props => {
    const availableProducts = props.products.availableProducts;

    return (
        <View style={styles.container}>
            <FlatList
            data={availableProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem 
                key={itemData.item.id}
                id={itemData.item.id}
                userId={itemData.item.userId}
                name={itemData.item.name}
                imageUrl={itemData.item.imageUrl}
                description={itemData.item.description}
                price={itemData.item.price}
                navigation={props.navigation}
            />}
            />
        </View> 
    )
};

const styles = StyleSheet.create({});

ProductsOverview.navigationOptions = navData => {
    return {
        headerTitle: 'ALL PRODUCTS'
    }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductsOverview);