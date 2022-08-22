import React from 'react';
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
}

export const Input = ({ placeholder, titleInput, typeInput, height }: InputProps) => {

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
                    />
                );
            case 'password':
                return (
                    <Password
                        placeholder={placeholder}
                    />
                );
            case 'textArea':
                return (
                    <TextArea
                        placeholder={placeholder}
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
        </>
    )
}