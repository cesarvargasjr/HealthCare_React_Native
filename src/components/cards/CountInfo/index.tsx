import React from 'react';
import colors from '../../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

interface CountInfoProps {
    title: string;
    number: number;
    nameIcon: string;
    onPress?: () => void;
}

export const CountInfo = ({ title, number, nameIcon, onPress }: CountInfoProps) => {
    return (
        <S.ContainerCard onPress={onPress}>
            <Icon name={nameIcon} size={30} color={colors.white} />
            <S.Title>{title}</S.Title>
            <S.Number>{number}</S.Number>
        </S.ContainerCard>
    )
}