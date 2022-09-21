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
    }, [isFocused])

    return (
        <S.ContainerCard>
            {viewListPatients.length === 0 ? (
                <></>
            ) : (
                viewListPatients?.map(({ namePatient }, index) => (
                    <ContentSchedules name={namePatient} index={index} key={index} />))
            )}
        </S.ContainerCard>
    )
}