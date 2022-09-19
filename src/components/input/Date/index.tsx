import React from 'react';
import { TextInputMask } from 'react-native-masked-text';
// import { TextInput } from 'react-native';
// import { mask } from 'remask';

export const Date = ({ placeholder, onChangeText, value, maxLength }) => {

    // const formatDate = (expirationDate: number | string) => {
    //     return mask(expirationDate, '99/99/9999');
    // };

    return (
        <TextInputMask
            type="datetime"
            options={{
                format: 'DD/MM/YYYY',
            }}
            maxLength={maxLength}
            onChangeText={(e) => onChangeText(e)}
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