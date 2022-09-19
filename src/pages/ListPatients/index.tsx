import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/Cards/Patient';
import { ModalNotifications } from '../../components/Modal/ModalNotifications';
import handleListPatients from '../../services/Patients/ListPatient';
import { TabBar } from '../../components/TabBar';

export const ListPatients = () => {

    const navigation: any = useNavigation();
    const [listPatients, setListPatients] = useState([]);

    useMemo(async () => {
        const response = await handleListPatients();
        setListPatients(response);
    }, [])

    return (
        <S.ContainerPage>
            <S.ContainerCards showsVerticalScrollIndicator={false} >
                {/**************** VALIDAR REGRA PARA EXIBIR MODAL ****************/}
                {listPatients ? (
                    <>
                        {listPatients?.map(({ name, age }, index) => (
                            <CardPatient
                                namePatient={name}
                                agePatient={age}
                                key={index}
                            />
                        ))}
                    </>
                ) : (
                    <ModalNotifications
                        description='Você não possui pacientes. Deseja cadastrar um paciente agora?'
                        navigate={() => navigation.navigate('RegisterPatient')}
                    />
                )}
            </S.ContainerCards>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}