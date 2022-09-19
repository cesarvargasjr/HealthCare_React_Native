import React, { useMemo, useState } from 'react';
import * as S from './styles';
import { ContentSchedules } from './ContentSchedules';
import handleListPatients from '../../../services/Patients/ListPatient';

export const SchedulesPatients = () => {

    const [listPatients, setListPatients] = useState([]);
    const viewListPatients = listPatients?.slice(0, 3);

    useMemo(async () => {
        const response: any = await handleListPatients();
        response?.length > 0 && setListPatients(response);
    }, [])

    return (
        <S.ContainerCard>
            {viewListPatients?.map(({ name }, index) => (
                <ContentSchedules namePatient={name} index={index} key={index} />
            ))}
        </S.ContainerCard>
    )
}