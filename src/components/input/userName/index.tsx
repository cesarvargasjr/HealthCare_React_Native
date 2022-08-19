import React from 'react';
import { MaskedTextInput } from 'react-native-mask-text';

export const UserName = ({ placeholder }) => {
    return (
        <MaskedTextInput
            mask="AAAAAAAAAAAAAAAAAAAAAAAA99999999999999999"
            maxLength={20}
            onChangeText={(value) => value}
            placeholder={placeholder}
            placeholderTextColor='#bbbbff'
            style={{
                fontSize: 16,
                fontFamily: 'Nunito_400Regular',
            }}
        />
    )
}