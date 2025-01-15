import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const EcommerceSafeAreaView = ({ children, style }: any) => {
    return <SafeAreaView style={[styles.safeAreaStyle]}>{children}</SafeAreaView>;
};

export default EcommerceSafeAreaView;

const styles = StyleSheet.create({
    safeAreaStyle: {
        padding: moderateScale(18),
        flex: 1,
    },
});
