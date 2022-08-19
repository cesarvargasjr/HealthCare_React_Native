import React from 'react';
import * as S from './styles';

interface ButtonProps {
    textButton: string;
    onPress: () => void;
    marginTop?: number;
    marginBottom?: number;
    typeButton: string;
}

export const Button = ({ textButton, onPress, marginTop, marginBottom, typeButton }: ButtonProps) => {
    return (
        <>
            {typeButton === 'primary' && (
                <S.ContainerButton
                    onPress={onPress}
                    marginTop={marginTop}
                    marginBottom={marginBottom}
                >
                    <S.TextButton>{textButton}</S.TextButton>
                </S.ContainerButton>
            )}
            {typeButton === 'secondary' && (
                <S.ContainerButtonNewUser
                    onPress={onPress}
                    marginTop={marginTop}
                    marginBottom={marginBottom}
                >
                    <S.TextButtonNewUser>{textButton}</S.TextButtonNewUser>
                </S.ContainerButtonNewUser>
            )}
        </>
    );
};