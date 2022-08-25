import React, { useEffect, useState } from 'react';
import * as S from './styles'
import { Number } from './number';
import { Password } from './password';
import { Text } from './text';
import { UserName } from './userName';
import { TextArea } from './textArea';

interface InputProps {
    placeholder: string;
    titleInput: string;
    typeInput: string;
    height?: number;
    onChangeText?: any;
    value?: any;
    messageError?: string;
    maxLength?: number;
}

export const Input = ({ placeholder, titleInput, typeInput, height, value, onChangeText, messageError, maxLength }: InputProps) => {

    function getInput() {
        switch (typeInput) {
            case 'userName':
                return (
                    <UserName
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                    />
                );
            case 'text':
                return (
                    <Text
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                    />
                );
            case 'number':
                return (
                    <Number
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                        maxLength={maxLength}
                    />
                );
            case 'password':
                return (
                    <Password
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                    />
                );
            case 'textArea':
                return (
                    <TextArea
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                    />
                );
        }
    }

    return (
        <>
            <S.TitleInput>{titleInput}</S.TitleInput>
            <S.ContainerInput height={height} >
                {getInput()}
            </S.ContainerInput>
            <S.MessageError>{messageError}</S.MessageError>
        </>
    )
}