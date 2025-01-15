import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import EcommerceSafeAreaView from '@/components/common/ecommerce-safearea-view';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BannerProduct from '@/components/home/banner-product';
import CategoriesList, { categories } from '@/components/home/categories-list';

import { useRouter } from 'expo-router';
import { ProductGridList } from '@/components/home/product-grid';
import SectionHeader from '@/components/home/section-header';
import PayButton from '@/components/home/pay-button';
import CreditCardModal from '@/components/home/credit-card-modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    const handlePay = () => {
        setModalVisible(true);
    };
    return (
        <GestureHandlerRootView>
            <EcommerceSafeAreaView>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: verticalScale(5) }}
                    showsVerticalScrollIndicator={false}
                >
                    <SectionHeader title={'Hola, bienvenidx'} />
                    <BannerProduct />
                    <SectionHeader title={'Categories'} />
                    <CategoriesList categories={categories} />
                    <SectionHeader title={'Latest products'} />
                    <ProductGridList quantity={30} />
                </ScrollView>

                {modalVisible ? (
                    <>
                        <View
                            style={{
                                position: 'absolute',
                                backgroundColor: modalVisible ? '#0009' : 'transparent',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                        ></View>
                        <CreditCardModal modalVisible={modalVisible} closeModal={closeModal} />
                    </>
                ) : (
                    <View>
                        <PayButton onPress={handlePay} />
                    </View>
                )}
            </EcommerceSafeAreaView>
        </GestureHandlerRootView>
    );
};

export default Home;
