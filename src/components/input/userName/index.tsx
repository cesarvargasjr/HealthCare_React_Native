import React from 'react';
import { MaskedTextInput } from 'react-native-mask-text';

export const UserName = ({ placeholder }) => {
    return (
        <MaskedTextInput
            mask="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
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