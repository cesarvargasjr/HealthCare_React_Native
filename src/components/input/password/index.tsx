import React from 'react';
import { TextInput } from 'react-native';

export const Password = ({ placeholder, onChangeText, value, onFocus }) => {

    return (
        <TextInput
            maxLength={20}
            passwordRules={null}
            onChangeText={(e) => onChangeText(e.trim().replace(/ /g, ''))}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#bbbbff'
            secureTextEntry={true}
            onFocus={onFocus}
            style={{
                fontSize: 16,
                fontFamily: 'Nunito_400Regular',
            }}
        />
    )
}