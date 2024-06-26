import React, { useState } from 'react';
import { ModalDelete } from '../../modal/modalDelete';
import { useToast } from 'react-native-toast-notifications';
import handleDeleteDrug from '../../../services/drugs/deleteDrug';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';
import monthsNumber from '../../../utils/monthsNumber';
import * as S from './styles';

interface CardProps {
    onPress?: () => void;
    nameDrug: string;
    daysExpired: number;
    timeNotification: number;
    totalDrugs: number;
    daysNotifications: number;
    id: string;
    setListDrugs: any;
    dateInitial: any;
}

export const CardDrugs = ({ id, setListDrugs, nameDrug, daysExpired, timeNotification, totalDrugs, daysNotifications, dateInitial }: CardProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const toast = useToast();

    const deleteDrug = () => {
        handleDeleteDrug(id)
        setListDrugs((list: any) => list.filter((item: any) => item.id !== id));
        toast.show('Medicamento excluído com sucesso', { type: 'success' })
    };

    const dateInitialNotification = dateInitial.split(' ');
    const [month, day, year] = dateInitialNotification;
    const date = `${day}/${monthsNumber[month]}/${year}`;

    const RenderDaysNotifications = () => {
        if (daysNotifications > 1) {
            return (
                <S.Text>Tratamento por {daysNotifications} dias</S.Text>
            )
        } else {
            return (
                <S.Text>Tratamento por {daysNotifications} dia</S.Text>
            )
        }
    };


    return (
        <S.ContainerCard>
            <S.ContainerHeader>
                <S.Title>{nameDrug}</S.Title>
                <S.ContainerHour>
                    <Icon name="clock-o" size={19} color={colors.lightGreen} />
                    <S.TextHour>
                        {timeNotification}
                    </S.TextHour>
                </S.ContainerHour>
            </S.ContainerHeader>
            <S.TextDateInitial><S.TextBold>Início:</S.TextBold> {date}</S.TextDateInitial>
            <S.ContainerRow>
                <RenderDaysNotifications />
                <S.ContainerDelete onPress={() => setIsOpen(true)} >
                    <Icon name="trash" size={22} color={colors.lightRed} />
                </S.ContainerDelete>
            </S.ContainerRow>
            {isOpen && (
                <ModalDelete
                    onPress={() => (deleteDrug(), setIsOpen(false))}
                    description='Deseja excluir este medicamento?'
                    closeModal={() => setIsOpen(false)}
                />
            )}
        </S.ContainerCard>
    )
}


{/* 
    >>>>> QUANTIDADE DE COMPRIMIDOS NA CARTELA / QUANTOS DIAS RESTAM DE NOTIFICAÇÃO <<<<<
    >>>>> PODERIA TRAZER QUANTOS REMÉDIOS AINDA TEM EM ESTOQUE <<<<< 

    // ********** DESENVOLVER FUNÇÃO PARA CALCULAR DIAS RESTANTES **********
        var daysExpired = 5;
    // *********************************************************************

        <S.TextBold>Comprimidos na cartela: <S.Text>{totalDrugs}</S.Text></S.TextBold>
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
                    <Icon name="trash" size={22} color={colors.lightRed} />
                </S.ContainerDelete>
            </S.ContainerRow>  */}