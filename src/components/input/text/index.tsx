import React from 'react';
import { TextInput } from 'react-native';

export const Text = ({ placeholder, value, onChangeText }) => {

    return (
        <TextInput
            maxLength={50}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#bbbbff'
            style={{
                fontSize: 16,
                fontFamily: 'Nunito_400Regular',
            }}
        />
    )
}