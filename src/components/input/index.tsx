import React from 'react';
import * as S from './styles'
import { Number } from './Number';
import { Password } from './Password';
import { Text } from './Text';
import { UserName } from './UserName';
import { TextArea } from './TextArea';
import { Date } from './Date';

interface InputProps {
    placeholder: string;
    titleInput: string;
    typeInput: string;
    height?: number;
    onChangeText?: any;
    value?: any;
    messageError?: string;
    maxLength?: number;
    descInput?: string;
    onFocus?: any;
}

export const Input = ({ placeholder, descInput, titleInput, typeInput, height, value, onChangeText, messageError, maxLength, onFocus }: InputProps) => {

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
                        onFocus={onFocus}
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
            case 'date':
                return (
                    <Date
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                        maxLength={maxLength}
                    />
                );
        }
    }

    return (
        <>
            <S.ContainerTitle>
                <S.TitleInput>{titleInput}</S.TitleInput>
                {descInput && <S.DescInput>{descInput}</S.DescInput>}
            </S.ContainerTitle>
            <S.ContainerInput height={height} >
                {getInput()}
            </S.ContainerInput>
            <S.MessageError>{messageError}</S.MessageError>
        </>
    )
}