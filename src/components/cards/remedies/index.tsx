import React, { useState } from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ModalDelete } from '../../modal/modalDelete';

interface CardProps {
    onPress?: () => void;
    nameRemedie: string;
    daysExpired: number;
    timerNotification: number;
    totalRemedies: number;
    daysNotifications: number;
}

export const CardRemedies = ({ nameRemedie, daysExpired, timerNotification, totalRemedies, daysNotifications }: CardProps) => {

    const [isOpen, setIsOpen] = useState(false);

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
                    <S.TextExpired>Restam {daysExpired} dias...</S.TextExpired>
                ) : (
                    <S.TextExpired>Resta {daysExpired} dia...</S.TextExpired>
                )}
                <S.ContainerDelete onPress={() => setIsOpen(true)} >
                    <Icon name="trash" size={25} color='#FF2222' />
                </S.ContainerDelete>
            </S.ContainerRow>
            {isOpen && (
                <ModalDelete
                    description='Deseja excluir este medicamento?'
                    closeModal={() => setIsOpen(false)}
                />
            )}
        </S.ContainerCard>
    )
}