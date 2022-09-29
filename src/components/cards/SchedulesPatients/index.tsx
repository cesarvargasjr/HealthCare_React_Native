import React, { useMemo, useState } from 'react';
import handleListPatients from '../../../services/Patients/ListPatient';
import { ContentSchedules } from './ContentSchedules';
import { usePatient } from '../../../contexts/Patient';
import { useIsFocused } from '@react-navigation/native';
import * as S from './styles';
import { useAuth } from '../../../contexts/Auth';
import { handleListAllDrugs } from '../../../services/Drugs/ListDrug';

export const SchedulesPatients = () => {

    const [listDrugs, setListDrugs]: any = useState();
    const viewListDrugs = listDrugs?.slice(0, 3);
    const { user } = useAuth();
    const isFocused = useIsFocused();

    useMemo(
        async () => {
            const response: any = await handleListAllDrugs(user);
            response?.length > 0 && setListDrugs(response);
            setListDrugs(response);
        }, [isFocused]);

    const renderContentSchedules = () => {
        if (viewListDrugs?.length === 0) {
            return (
                <S.TextBold>
                    Você não possui atendimentos no momento
                </S.TextBold>
            )
        } else {
            return (
                viewListDrugs?.map(({ namePatient, hours }, index) => (
                    <ContentSchedules name={namePatient} time={hours} index={index} key={index} />))
            )
        }
    }

    return (
        <S.ContainerCard>
            {renderContentSchedules()}
        </S.ContainerCard>
    )
}