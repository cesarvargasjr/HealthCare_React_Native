import React from 'react';
import { TextInput } from 'react-native';

export const UserName = ({ placeholder, onChangeText, value }) => {

    return (
        <TextInput
            maxLength={30}
            onChangeText={(e) => onChangeText(e.trim().replace(/ /g, ''))}
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