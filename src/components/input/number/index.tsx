import React from 'react';
import { MaskedTextInput } from 'react-native-mask-text';

export const Number = ({ placeholder }) => {
    return (
        <MaskedTextInput
            maxLength={10}
            mask="99999999999999999999999"
            onChangeText={(value) => value}
            placeholder={placeholder}
            placeholderTextColor='#bbbbff'
            keyboardType={'numeric'}
            style={{
                fontSize: 16,
                fontFamily: 'Nunito_400Regular',
            }}
        />
    )
}