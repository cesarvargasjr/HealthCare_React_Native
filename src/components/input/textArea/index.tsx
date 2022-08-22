import React from 'react';
import { TextInput } from 'react-native';

export const TextArea = ({ placeholder }) => {
    return (
        <TextInput
            maxLength={200}
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