import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ShoppingCartButton from './shopping-cart-button';

const ProductItem = ({ item }: any) => {
    return (
        <View style={styles.productContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
            <View
                style={{
                    position: 'absolute',
                    bottom: verticalScale(10),
                    right: scale(10),
                }}
            >
                <ShoppingCartButton />
            </View>
        </View>
    );
};

export default ProductItem;
const styles = StyleSheet.create({
    productContainer: {
        flex: 1, // Each product takes up equal space
        position: 'relative',
        marginHorizontal: 5, // Margin between items in a row
        backgroundColor: '#fff', // Background color for each product
        borderRadius: 10, // Rounded corners
        alignItems: 'flex-start', // Center-align content
        padding: 10, // Padding inside each product card
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.1, // Shadow opacity
        elevation: 3, // Elevation for Android shadow
    },
    image: {
        height: verticalScale(120), // Image height
        width: '100%', // Image width
        borderRadius: 10, // Rounded corners for the image
        marginBottom: 10, // Space below the image
    },
    productName: {
        fontWeight: '600', // Semi-bold font weight
        fontSize: moderateScale(14), // Scaled font size
        textAlign: 'center', // Center align text
    },
    productPrice: {
        fontWeight: '600', // Semi-bold font weight
        fontSize: moderateScale(13), // Scaled font size
        color: '#4caf50', // Green color for the price
    },
    originalPrice: {
        fontWeight: '400', // Regular font weight
        fontSize: moderateScale(10), // Scaled font size
        color: 'gray', // Gray color for the original price
        textDecorationLine: 'line-through', // Strike-through the original price
    },
});
