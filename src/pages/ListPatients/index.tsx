import React, { useMemo } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/Cards/Patient';
import { ModalNotifications } from '../../components/Modal/ModalNotifications';
import handleListPatients from '../../services/Patients/ListPatient';
import { TabBar } from '../../components/TabBar';
import { usePatient } from '../../contexts/Patient';
import * as S from './styles';

export const ListPatients = () => {

    const navigation: any = useNavigation();
    const { listPatients, setListPatients } = usePatient();
    const isFocused = useIsFocused();

    useMemo(async () => {
        const response = await handleListPatients();
        setListPatients(response);
    }, [isFocused])

    const renderContent = () => {
        if (listPatients.length === 0) {
            return (
                <ModalNotifications
                    description='Você não possui pacientes. Deseja cadastrar um paciente agora?'
                    navigate={() => navigation.navigate('RegisterPatient')}
                />
            )
        } else {
            return (
                listPatients?.map(({ id, namePatient, date, weight, height }, index) => (
                    <CardPatient
                        id={id}
                        namePatient={namePatient}
                        date={date}
                        weight={weight}
                        height={height}
                        key={index}
                    />
                ))
            )
        }
    }

    return (
        <S.ContainerPage>
            <S.ContainerCards showsVerticalScrollIndicator={false} >
                {renderContent()}
            </S.ContainerCards>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}