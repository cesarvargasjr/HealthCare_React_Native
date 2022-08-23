import React from 'react';
import * as S from './styles';

interface ButtonProps {
    typeButton: string;
    textButton: string;
    onPress: () => void;
    marginTop?: number;
    marginBottom?: number;
    width?: number;
}

export const Button = ({ textButton, onPress, marginTop, marginBottom, typeButton, width }: ButtonProps) => {

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
                    <S.ContainerButtonJustText
                        onPress={onPress}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                        width={width}
                    >
                        <S.TextButtonJustText>{textButton}</S.TextButtonJustText>
                    </S.ContainerButtonJustText>
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
            case 'cancel':
                return (
                    <S.ContainerButtonCancel
                        onPress={onPress}
                        marginTop={marginTop}
                        marginBottom={marginBottom}
                    >
                        <S.TextButtonCancel>{textButton}</S.TextButtonCancel>
                    </S.ContainerButtonCancel>
                );
        }
    }

    return (
        <>
            {getButton()}
        </>
    );
};