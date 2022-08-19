import React from 'react';
import * as S from './styles'
import { Number } from './number';
import { Password } from './password';
import { Text } from './text';
import { UserName } from './userName';

interface InputProps {
    placeholder: string;
    titleInput: string;
    typeInput: string;
}

export const Input = ({ placeholder, titleInput, typeInput }: InputProps) => {

    function getInput() {
        switch (typeInput) {
            case 'userName':
                return (
                    <UserName
                        placeholder={placeholder}
                    />
                );
            case 'text':
                return (
                    <Text
                        placeholder={placeholder}
                    />
                );
            case 'number':
                return (
                    <Number
                        placeholder={placeholder}
                        keyboardType={true}
                    />
                );
            case 'password':
                return (
                    <Password
                        placeholder={placeholder}
                        secureTextEntry={true}
                    />
                );
        }
    }

    return (
        <>
            <S.TitleInput>{titleInput}</S.TitleInput>
            <S.ContainerInput>
                {getInput()}
            </S.ContainerInput>
        </>
    )
}