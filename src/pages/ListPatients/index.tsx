import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/Cards/Patient';
import { Button } from '../../components/Button';
import { Line } from '../../components/Line';
import { ModalNotifications } from '../../components/Modal/ModalNotifications';
import handleListPatients from '../../services/Patients/ListPatient';

export const ListPatients = () => {

    const navigation: any = useNavigation();
    const [listPatients, setListPatients] = useState([]);

    useMemo(async () => {
        const response = await handleListPatients();
        setListPatients(response);
    }, [])

    return (
        <S.ContainerPage>
            <S.ContainerCards showsVerticalScrollIndicator={true} >
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
            <S.ContainerLine>
                <Line
                    marginTop={10}
                />
            </S.ContainerLine>
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='CADASTRAR UM PACIENTE'
                    onPress={() => navigation.navigate('RegisterPatient')}
                    marginTop={8}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}