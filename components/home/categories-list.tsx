import React, { memo } from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';
import { verticalScale, moderateScale, scale } from 'react-native-size-matters';
export const categories = [
    { name: 'Electronics', image: require('../../assets/images/electronics_category.png') },
    { name: 'Fashion', image: require('../../assets/images/fashion_category.png') },
    { name: 'Home', image: require('../../assets/images/home_category.png') },
    { name: 'Industrial', image: require('../../assets/images/industrial_category.png') },
];
// Memoized component for each category item to prevent unnecessary re-renders
const CategoryItem = ({ name, image }: any) => {
    return (
        <View style={styles.categoryContainer}>
            <Image
                source={image}
                style={{
                    height: 50,
                    width: 50,
                    marginBottom: 5,
                }}
            />
            <Text style={styles.categoryText}>{name}</Text>
        </View>
    );
};

const CategoriesList = ({ categories }: any) => {
    // Render function for FlatList, reuses memoized CategoryItem
    const renderItem = ({ item }: any) => <CategoryItem name={item.name} image={item.image} />;

    return (
        <View style={{ height: verticalScale(100) }}>
            <FlatList
                data={categories} // List of categories to render
                horizontal // Enables horizontal scrolling
                keyExtractor={(item, index) => String(index)} // Generates a unique key for each item
                renderItem={renderItem} // Uses the render function to display items
                contentContainerStyle={styles.listContainer} // Styling for the list container
                showsHorizontalScrollIndicator={false} // Hides the horizontal scroll bar for better UI
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: moderateScale(15), // Horizontal padding for the list
        gap: 15, // Spacing between items
    },
    categoryContainer: {
        display: 'flex', // Flexbox layout for alignment
        flexDirection: 'column', // Column layout for items
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        marginTop: verticalScale(5), // Vertical margin for top spacing
        paddingVertical: 10, // Vertical padding inside the item
        paddingHorizontal: 7, // Horizontal padding inside the item
        borderRadius: 20, // Rounded corners for aesthetic
        width: scale(100),
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        height: verticalScale(80),
    },
    categoryImage: {
        borderRadius: 10, // Rounded corners for the image
        height: 50, // Fixed height for the image
        width: 50, // Fixed width for the image
    },
    categoryText: {
        fontWeight: '600', // Semi-bold font weight for better readability
        fontSize: moderateScale(12), // Scaled font size for consistent UI
        textAlign: 'center', // Centers the text horizontally
    },
});

export default CategoriesList;
