import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import EcommerceSafeAreaView from '@/components/common/ecommerce-safearea-view';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BannerProduct from '@/components/home/banner-product';
import CategoriesList, { categories } from '@/components/home/categories-list';
import ProductGrid from '@/components/home/product-grid';

const Home = () => {
    return (
        <EcommerceSafeAreaView>
            <ScrollView
                contentContainerStyle={{ paddingBottom: verticalScale(5) }}
                showsVerticalScrollIndicator={false}
            >
                <BannerProduct />
                <View style={{ paddingVertical: verticalScale(20) }}>
                    <Text
                        style={{
                            fontWeight: '800',
                            fontSize: moderateScale(18),
                        }}
                    >
                        Categories
                    </Text>
                </View>
                <CategoriesList categories={categories} />
                <View
                    style={{
                        paddingVertical: verticalScale(20),
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '800',
                            fontSize: moderateScale(18),
                        }}
                    >
                        Latest products
                    </Text>
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: moderateScale(16),
                            color: '#0A5EB0',
                            borderBottomWidth: 1,
                            borderBottomColor: '#0A5EB0',
                        }}
                    >
                        See all
                    </Text>
                </View>
                <ProductGrid />
            </ScrollView>
        </EcommerceSafeAreaView>
    );
};

export default Home;
