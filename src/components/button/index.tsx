import React from 'react';
import * as S from './styles';

export const Button = ({ textButton, onPress, marginTop, marginBottom, typeButton }) => {
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