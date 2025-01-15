import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';

const PayButton = () => {
    const handleButtonPress = () => {
        console.log('Floating button pressed');
    };
    const cartItemCount = 3;
    return (
        <TouchableOpacity style={styles.floatingButton} onPress={handleButtonPress}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>Pay with credit card</Text>
                <View style={styles.cartIconContainer}>
                    <Ionicons name="cart-outline" size={35} color="white" />
                    {cartItemCount > 0 && (
                        <View style={styles.cartItemCount}>
                            <Text style={styles.cartItemCountText}>{cartItemCount}</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PayButton;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        borderRadius: 25,
        backgroundColor: '#D91656',
        marginHorizontal: scale(20),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    floatingButton: {
        position: 'absolute',
        bottom: verticalScale(20),
        height: verticalScale(40),
        width: '100%',
    },
    buttonText: {
        fontSize: moderateScale(18),
        fontWeight: '700',
        color: '#fff',
    },
    cartIconContainer: {
        position: 'relative',
    },
    cartItemCount: {
        position: 'absolute',
        top: verticalScale(-3),
        right: scale(-3),
        backgroundColor: 'red',
        borderRadius: 10,
        width: scale(15),
        height: verticalScale(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartItemCountText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
