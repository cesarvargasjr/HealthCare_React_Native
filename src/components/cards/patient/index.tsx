import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';

interface CardProps {
    namePatient: string;
    agePatient: number;
    onPress?: () => void;
}

export const CardPatient = ({ onPress, namePatient, agePatient }: CardProps) => {
    return (
        <S.ContainerCard
            onPress={onPress}
        >
            <S.ContainerInfo>
                <S.TextBold>Nome: <S.Text>{namePatient}</S.Text></S.TextBold>
                <S.TextBold>Idade: <S.Text>{agePatient} anos</S.Text></S.TextBold>
            </S.ContainerInfo>
            <Image
                source={require('../../../assets/iconProfile.png')}
                resizeMode="contain"
                style={{ height: 56, width: 60 }}
            />
        </S.ContainerCard>
    )
}