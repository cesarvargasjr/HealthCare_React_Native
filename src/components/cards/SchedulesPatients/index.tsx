import React, { useMemo, useState } from 'react';
import { ContentSchedules } from './ContentSchedules';
import { useIsFocused } from '@react-navigation/native';
import * as S from './styles';
import { useAuth } from '../../../contexts/Auth';
import { handleListAllDrugs } from '../../../services/drugs/listDrug';

export const SchedulesPatients = () => {

    const { user } = useAuth();
    const isFocused = useIsFocused();
    const [listDrugs, setListDrugs]: any = useState([]);
    const viewListDrugs = listDrugs?.sort((a, b) => a.timeNotification > b.timeNotification).slice(0, 3);

    useMemo(
        async () => {
            const response: any = await handleListAllDrugs(user);

            const listSchedules = response || [];
            const filteredListSchedules = listSchedules?.filter(item => {
                const [hours, minutes] = new Date().toLocaleTimeString().split(':')
                const [scheduleHours, scheduleMinutes] = item.timeNotification.split(':')

                if (+hours < +scheduleHours) {
                    return item
                } else if (+hours === +scheduleHours && +minutes <= +scheduleMinutes) {
                    return item
                }
            })

            filteredListSchedules?.length > 0 && setListDrugs(filteredListSchedules);
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
                viewListDrugs?.map(({ namePatient, timeNotification }, index) => (
                    <ContentSchedules name={namePatient} timeNotification={timeNotification} index={index} key={index} />))
            )
        }
    }

    return (
        <S.ContainerCard>
            {renderContentSchedules()}
        </S.ContainerCard>
    )
}