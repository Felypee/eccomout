import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import MaskInput, { Masks } from 'react-native-mask-input';
import { verticalScale, moderateScale, scale } from 'react-native-size-matters';

const creditCardSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    cardNumber: z
        .string()
        .regex(/[^a-zA-Z]/, 'Card number cannot contain letters')
        .transform((value) => value.replace(/[^0-9]/g, ''))
        .refine((num) => num.length === 16, 'Card number must be 16 digits')
        .refine((num) => detectCardType(num) !== '', 'Invalid card type'),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date (MM/YY)'),
    cvv: z.string().regex(/^\d{3}$/, 'CVV must be 3 digits'),
});

const detectCardType = (number: string) => {
    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;

    if (visaRegex.test(number)) return 'visa';
    if (masterCardRegex.test(number)) return 'mastercard';
    return '';
};

const CreditCardModal = ({ modalVisible, closeModal }: any) => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(creditCardSchema),
        mode: 'onChange',
    });
    const customDateMask = [/\d/, /\d/, '/', /\d/, /\d/];
    const cardNumber = watch('cardNumber');
    const cardType = detectCardType(cardNumber || '');
    const bottomSheetRef: any = useRef(null);
    const snapPoints = ['60%', '95%'];

    const onSubmit = (data: any) => {
        console.log('Submitted Data:', data);
        closeModal();
    };
    const handleFocus = () => {
        bottomSheetRef.current?.snapToIndex(2);
    };

    return (
        <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints} enablePanDownToClose onClose={closeModal}>
            <BottomSheetView>
                <ScrollView>
                    <View style={styles.formContainer}>
                        {cardType && (
                            <View style={{ alignItems: 'center', marginBottom: verticalScale(20) }}>
                                <Image
                                    source={
                                        cardType === 'visa'
                                            ? require('../../assets/images/visa.png')
                                            : require('../../assets/images/mastercard.png')
                                    }
                                    style={{ width: '100%', height: verticalScale(200), resizeMode: 'contain' }}
                                />
                            </View>
                        )}

                        <Text style={styles.cardTitle}>Credit Card Information</Text>

                        {/* Full Name */}
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field: { onChange, value } }: any) => (
                                <>
                                    <Text style={styles.inputLabel}>Full Name</Text>
                                    <TextInput
                                        style={[styles.inputField, errors.fullName && styles.errorField]}
                                        placeholder="Full Name"
                                        onChangeText={onChange}
                                        onFocus={handleFocus}
                                        value={value}
                                    />
                                    {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}
                                </>
                            )}
                        />

                        {/* Card Number */}
                        <Controller
                            name="cardNumber"
                            control={control}
                            render={({ field: { onChange, value } }: any) => (
                                <>
                                    <Text style={styles.inputLabel}>Card Number</Text>
                                    <MaskInput
                                        style={[styles.inputField, errors.cardNumber && styles.errorField]}
                                        placeholder="1234 5678 9012 3456"
                                        keyboardType="numeric"
                                        mask={Masks.CREDIT_CARD}
                                        onFocus={handleFocus}
                                        value={value}
                                        onChangeText={onChange}
                                    />
                                    {errors.cardNumber && (
                                        <Text style={styles.errorText}>{errors.cardNumber.message}</Text>
                                    )}
                                </>
                            )}
                        />

                        {/* Expiration Date & CVV */}
                        <View style={styles.row}>
                            <Controller
                                name="expirationDate"
                                control={control}
                                render={({ field: { onChange, value } }: any) => (
                                    <View style={styles.column}>
                                        <Text style={styles.inputLabel}>Expiration Date</Text>
                                        <MaskInput
                                            style={[styles.inputField, errors.expirationDate && styles.errorField]}
                                            placeholder="MM/YY"
                                            keyboardType="numeric"
                                            mask={customDateMask}
                                            onFocus={handleFocus}
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        {errors.expirationDate && (
                                            <Text style={styles.errorText}>{errors.expirationDate.message}</Text>
                                        )}
                                    </View>
                                )}
                            />

                            <Controller
                                name="cvv"
                                control={control}
                                render={({ field: { onChange, value } }: any) => (
                                    <View style={styles.column}>
                                        <Text style={styles.inputLabel}>CVV</Text>
                                        <MaskInput
                                            style={[styles.inputField, errors.cvv && styles.errorField]}
                                            placeholder="123"
                                            keyboardType="numeric"
                                            onFocus={handleFocus}
                                            value={value}
                                            onChangeText={onChange}
                                        />
                                        {errors.cvv && <Text style={styles.errorText}>{errors.cvv.message}</Text>}
                                    </View>
                                )}
                            />
                        </View>

                        {/* Buttons */}
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.saveButton]}
                                onPress={handleSubmit(onSubmit)}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                marginBottom: verticalScale(250),
                            }}
                        ></View>
                    </View>
                </ScrollView>
            </BottomSheetView>
        </BottomSheet>
    );
};

export default CreditCardModal;

const styles = StyleSheet.create({
    formContainer: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: scale(20),
        width: '100%',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
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
    errorField: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: verticalScale(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        width: '48%',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
    },
    button: {
        width: '45%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(40),
    },
    cancelButton: {
        borderColor: '#D91656',
        borderWidth: 2,
        backgroundColor: 'white',
    },
    cancelButtonText: {
        color: '#D91656',
        fontSize: moderateScale(18),
        fontWeight: '700',
    },
    saveButton: {
        backgroundColor: '#D91656',
    },
    saveButtonText: {
        color: 'white',
        fontSize: moderateScale(18),
        fontWeight: '700',
    },
});
