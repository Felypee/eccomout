import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import CreditCardModal from './credit-card-modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PayButton = ({ onPress }: any) => {
    const cartItems = useSelector((state: any) => state.cart.items);

    return (
        <>
            <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
                <View style={styles.container}>
                    <Text style={styles.buttonText}>Pay with credit card</Text>
                    <View style={styles.cartIconContainer}>
                        <Ionicons name="cart-outline" size={35} color="white" />
                        {cartItems.length > 0 && (
                            <View style={styles.cartItemCount}>
                                <Text style={styles.cartItemCountText}>{cartItems.length}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

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
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputField: {
        height: verticalScale(40),
        borderColor: '#D91656',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: verticalScale(10),
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
    },
});
export default PayButton;
