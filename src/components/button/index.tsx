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

    function getButton() {
        switch (typeButton) {
            case 'primary':
                return (
                    <S.ContainerButton
                        onPress={onPress}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        <S.TextButton>{textButton}</S.TextButton>
                    </S.ContainerButton>
                );
            case 'secondary':
                return (
                    <S.ContainerButtonNewUser
                        onPress={onPress}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        <S.TextButtonNewUser>{textButton}</S.TextButtonNewUser>
                    </S.ContainerButtonNewUser>
                );
            case 'tertiary':
                return (
                    <S.ContainerButtonTertiary
                        onPress={onPress}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        <S.TextButtonTertiary>{textButton}</S.TextButtonTertiary>
                    </S.ContainerButtonTertiary>
                );
        }
    }

    return (
        <>
            {getButton()}
        </>
    );
};