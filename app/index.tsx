import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import EcommerceSafeAreaView from '@/components/common/ecommerce-safearea-view';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BannerProduct from '@/components/home/banner-product';
import CategoriesList, { categories } from '@/components/home/categories-list';

import { useRouter } from 'expo-router';
import { ProductGridList } from '@/components/home/product-grid';
import SectionHeader from '@/components/home/section-header';
import PayButton from '@/components/home/pay-button';

const Home = () => {
    const router = useRouter();
    return (
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
            <View>
                <PayButton />
            </View>
        </EcommerceSafeAreaView>
    );
};

export default Home;
