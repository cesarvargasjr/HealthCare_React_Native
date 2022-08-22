import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../../../components/button';

interface CardProps {
    onPress?: () => void;
    nameRemedie: string;
    daysExpired: number;
    timerNotification: number;
    totalRemedies: number;
    daysNotifications: number;
}

export const CardRemedies = ({ nameRemedie, daysExpired, timerNotification, totalRemedies, daysNotifications }: CardProps) => {
    return (
        <S.ContainerCard>
            <S.ContainerHeader>
                <S.Title>{nameRemedie}</S.Title>
                <S.TextHour>
                    <Icon name="bell" size={16} color="#16C153" /> {timerNotification}h
                </S.TextHour>
            </S.ContainerHeader>
            <S.TextBold>Comprimidos na cartela: <S.Text>{totalRemedies}</S.Text></S.TextBold>
            <S.TextBold>Lembrete por:
                {daysNotifications > 1 ? (
                    <S.Text> {daysNotifications} dias</S.Text>
                ) : (
                    <S.Text> {daysNotifications} dia</S.Text>
                )}
            </S.TextBold>
            <S.ContainerRow>
                {daysExpired > 1 ? (
                    <S.TextExpired>Restam ainda {daysExpired} dias...</S.TextExpired>
                ) : (
                    <S.TextExpired>Resta ainda {daysExpired} dia...</S.TextExpired>
                )}
                <S.ContainerDelete onPress={() => console.log('***DEFINIR ROTA***')} >
                    <Icon name="trash" size={25} color='#FF0000' />
                </S.ContainerDelete>
            </S.ContainerRow>
        </S.ContainerCard>
    )
}