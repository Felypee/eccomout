import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const SectionHeader = ({ title }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: verticalScale(20),
    },
    text: {
        fontWeight: '800',
        fontSize: moderateScale(18),
    },
});

export default SectionHeader;
