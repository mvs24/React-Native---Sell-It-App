import React from 'react';
import { View,
     Text, 
     StyleSheet, 
     Image, 
     Platform, 
     TouchableOpacity,
     TouchableNativeFeedback } from 'react-native';

const ProductItem = props => {
    // const TouchableCmp = Platform.OS === 'android' && Platform.Version >= 21 ? <TouchableNativeFeedback></TouchableNativeFeedback> : <TouchableOpacity></TouchableOpacity>
    return (
         <TouchableNativeFeedback onPress={ () => { props.navigation.navigate('ProductsDetail', { productId: props.id, productName: props.name }) }}>
            <View style={styles.productItem}>
                <View>
                    <Image style={styles.image} source={{uri: props.imageUrl}}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>{props.name}</Text>
                    <Text style={styles.text}>${props.price}</Text>
                </View>
                <View>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>   
        </TouchableNativeFeedback>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 240,
        width: 240
    },
    text: {
        fontSize: 20,
        marginHorizontal: 30,
        marginVertical: 15
    },
    description: {
        fontSize: 16
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    productItem: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#777',
        elevation: 3,
        marginVertical: 30,
        padding: 10
    }
});

export default ProductItem;