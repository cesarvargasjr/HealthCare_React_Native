import React, { useMemo, useState } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/cards/patient';
import { Button } from '../../components/button';
import { Line } from '../../components/line';
import { ModalNotifications } from '../../components/modal/modalNotifications';
import handleListPatients from '../../services/patients/listPatient';

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
            <Line
                marginTop={10}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='VOLTAR'
                    onPress={() => navigation.navigate('Home')}
                    marginTop={8}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}