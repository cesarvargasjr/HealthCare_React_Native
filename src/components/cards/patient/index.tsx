import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';

interface CardProps {
    onPress?: () => void;
}

export const CardPatient = ({ onPress }) => {
    return (
        <S.ContainerCard
            onPress={onPress}
        >
            <S.ContainerInfo>
                <S.TextBold>Nome: <S.Text>José da Silva</S.Text></S.TextBold>
                <S.TextBold>Idade: <S.Text>80 anos</S.Text></S.TextBold>
            </S.ContainerInfo>
            <Image
                source={require('../../../assets/iconProfile.png')}
                resizeMode="contain"
                style={{ height: 56, width: 60 }}
            />
        </S.ContainerCard>
    )
}