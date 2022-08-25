import React from 'react';
import { TextInput } from 'react-native';

export const Number = ({ placeholder, onChangeText, value, maxLength }) => {

    return (
        <TextInput
            maxLength={maxLength}
            onChangeText={(e) => onChangeText(e.trim().replace(/[^0-9]/g, ''))}
            value={value}
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