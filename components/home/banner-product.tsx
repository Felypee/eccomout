import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';

const BannerProduct = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/banner-product.png')} style={styles.image} />
            <View style={styles.discountContainer}>
                <Text style={styles.discountText}>30% OFF</Text>
            </View>
            <Text style={styles.subText}>On headphones</Text>
            <Text style={styles.mainText}>Exclusive Sales</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: verticalScale(150),
    },
    image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 30,
    },
    discountContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: verticalScale(60),
        backgroundColor: 'black',
        left: scale(20),
        borderRadius: 10,
        paddingVertical: verticalScale(4),
        width: scale(50),
    },
    discountText: {
        fontWeight: '400',
        fontSize: moderateScale(8),
        color: 'white',
        padding: 0,
    },
    subText: {
        fontWeight: '400',
        fontSize: moderateScale(15),
        color: 'white',
        position: 'absolute',
        bottom: verticalScale(40),
        left: scale(20),
    },
    mainText: {
        fontWeight: '800',
        fontSize: moderateScale(18),
        color: 'white',
        position: 'absolute',
        bottom: verticalScale(20),
        left: scale(20),
    },
});

export default BannerProduct;
