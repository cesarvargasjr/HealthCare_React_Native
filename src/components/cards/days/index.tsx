import React from 'react';
import * as S from './styles';

interface CardProps {
    textDay: string;
    id: number;
    selected: number;
    onPress: any;
}

export const CardDays = ({ textDay, id, selected, onPress }: CardProps) => {

    return (
        <S.ContainerCard id={id} selected={selected} onPress={() => onPress(id)} >
            <S.Text id={id} selected={selected}>{textDay}</S.Text>
        </S.ContainerCard>
    )
}