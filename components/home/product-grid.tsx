import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';

import { verticalScale } from 'react-native-size-matters';
import ProductItem from './product-item';

// Generate 50 sample products
const productos = Array.from({ length: 30 }, (_, index) => ({
    id: `${index + 1}`, // Unique ID for each product
    name: `Product ${index + 1}`, // Product name
    price: (Math.random() * 50 + 10).toFixed(2), // Random price
    originalPrice: (Math.random() * 50 + 20).toFixed(2), // Random original price
    image: require('../../assets/images/banner-product.png'), // Ensure a valid image path
}));

export const ProductGridList = ({ quantity }: any) => {
    // Render each product item
    const renderItem = ({ item }: any) => <ProductItem item={item} />;

    return (
        <FlatList
            data={productos.slice(0, quantity)} // Data array
            renderItem={renderItem} // Function to render each item
            keyExtractor={(item) => item.id} // Unique key for each item
            numColumns={2} // Number of columns in the grid
            contentContainerStyle={styles.listContainer} // Container style for the FlatList
            columnWrapperStyle={styles.row} // Style for rows (applies when numColumns > 1)
            showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: verticalScale(20), // Padding at the bottom
    },
    row: {
        justifyContent: 'space-between', // Space between columns
        marginBottom: verticalScale(10), // Space between rows
    },
});
