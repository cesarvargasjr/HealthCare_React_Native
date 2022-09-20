import React from 'react';
import * as S from './styles';

interface CardProps {
    nameUser: string;
    totalPatients: number;
}

export const CardProfileUser = ({ nameUser, totalPatients }: CardProps) => {

    return (
        <S.ContainerCard>
            <S.Title>{nameUser}</S.Title>
            <S.ContainerInfo>
                <S.TextBold>Pacientes cadastrados: <S.Text>{totalPatients}</S.Text></S.TextBold>
            </S.ContainerInfo>
        </S.ContainerCard>
    )
}