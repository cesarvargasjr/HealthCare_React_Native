import React from 'react';
import { TextInput } from 'react-native';

export const Password = ({ placeholder, secureTextEntry }) => {
    return (
        <TextInput
            maxLength={8}
            onChangeText={(value) => value}
            placeholder={placeholder}
            placeholderTextColor='#bbbbff'
            secureTextEntry={secureTextEntry}
            style={{
                fontSize: 16,
                fontFamily: 'Nunito_400Regular',
            }}
        />
    )
}