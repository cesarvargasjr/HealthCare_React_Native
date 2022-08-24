import React from 'react';
import { TextInput } from 'react-native';

export const Password = ({ placeholder, onChangeText, value }) => {

    return (
        <TextInput
            maxLength={8}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#bbbbff'
            secureTextEntry={true}
            style={{
                fontSize: 16,
                fontFamily: 'Nunito_400Regular',
            }}
        />
    )
}