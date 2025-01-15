import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters'; // If you're using this library

// Sample product data
const productos = [
    {
        id: '1',
        name: 'Watch',
        price: 20.5,
        originalPrice: 40.0,
        image: require('../../assets/images/banner-product.png'),
    },
    {
        id: '2',
        name: 'Watch',
        price: 20.5,
        originalPrice: 40.0,
        image: require('../../assets/images/banner-product.png'),
    },
    {
        id: '3',
        name: 'Watch',
        price: 20.5,
        originalPrice: 40.0,
        image: require('../../assets/images/banner-product.png'),
    },
    {
        id: '4',
        name: 'Watch',
        price: 20.5,
        originalPrice: 40.0,
        image: require('../../assets/images/banner-product.png'),
    },
];

const ProductGrid = () => {
    return (
        <View style={styles.gridContainer}>
            <View style={styles.row}>
                {productos.slice(0, 2).map((item) => (
                    <View key={item.id} style={styles.productContainer}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>${item.price}</Text>
                        <Text style={styles.originalPrice}>${item.originalPrice}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.row}>
                {productos.slice(2, 4).map((item) => (
                    <View key={item.id} style={styles.productContainer}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>${item.price}</Text>
                        <Text style={styles.originalPrice}>${item.originalPrice}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        margin: 10,
    },
    row: {
        flexDirection: 'row', // Items are displayed in a row
        justifyContent: 'space-between', // Distribute space between items
        marginBottom: 10, // Space between rows
    },
    productContainer: {
        flex: 1,

        borderRadius: 10,
        alignItems: 'flex-start',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },

        elevation: 3,
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 20,
    },
    productName: {
        fontWeight: '600',
        fontSize: moderateScale(15),
        paddingTop: 4,
        paddingLeft: 4,
    },
    productPrice: {
        fontWeight: '600',
        fontSize: moderateScale(14),
        paddingTop: 1,
        paddingLeft: 4,
    },
    originalPrice: {
        fontWeight: '400',
        fontSize: moderateScale(12),
        color: 'gray',
        paddingLeft: 4,
        textDecorationLine: 'line-through', // Strike-through the original price
    },
});

export default ProductGrid;
