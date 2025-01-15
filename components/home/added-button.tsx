import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { scale, verticalScale } from 'react-native-size-matters';

const AddedButton = ({ onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    backgroundColor: '#5DB996',
                    borderRadius: 10,

                    height: verticalScale(35),
                    width: scale(38),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <MaterialIcons name="check" size={scale(20)} color="white" style={{ alignSelf: 'center' }} />
            </View>
        </TouchableOpacity>
    );
};

export default AddedButton;
