import React, { useMemo } from 'react';
import handleListPatients from '../../../services/Patients/ListPatient';
import { ContentSchedules } from './ContentSchedules';
import { usePatient } from '../../../contexts/Patient';
import { useIsFocused } from '@react-navigation/native';
import * as S from './styles';

export const SchedulesPatients = () => {

    const { listPatients, setListPatients } = usePatient();
    const viewListPatients = listPatients?.slice(0, 3);
    const isFocused = useIsFocused();

    useMemo(async () => {
        const response: any = await handleListPatients();
        response?.length > 0 && setListPatients(response);
    }, [isFocused]);

    const renderContentSchedules = () => {
        if (viewListPatients?.length === 0) {
            return (
                <S.TextBold>
                    Você não possui agendamentos no momento
                </S.TextBold>
            )
        } else {
            return (
                viewListPatients?.map(({ namePatient }, index) => (
                    <ContentSchedules name={namePatient} index={index} key={index} />))
            )
        }
    }

    return (
        <S.ContainerCard>
            {renderContentSchedules()}
        </S.ContainerCard>
    )
}