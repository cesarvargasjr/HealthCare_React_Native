import React, { useMemo } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/Cards/Patient';
import { TabBar } from '../../components/TabBar';
import { usePatient } from '../../contexts/Patient';
import { SvgCss } from 'react-native-svg';
import { Button } from '../../components/Button';
import handleListPatients from '../../services/Patients/ListPatient';
import listEmpity from '../../assets/listEmpity.svg';
import * as S from './styles';

export const ListPatients = () => {

    const navigation: any = useNavigation();
    const { listPatients, setListPatients } = usePatient();
    const isFocused = useIsFocused();

    useMemo(async () => {
        const response = await handleListPatients();
        setListPatients(response);
    }, [isFocused])

    const RenderContent = () => {
        if (listPatients?.length > 0) {
            return (
                <S.ContainerCards showsVerticalScrollIndicator={false} >
                    {listPatients?.map(({ id, namePatient, date, weight, height }, index) => (
                        <CardPatient
                            id={id}
                            namePatient={namePatient}
                            date={date}
                            weight={weight}
                            height={height}
                            key={index}
                        />
                    ))}
                </S.ContainerCards>
            )
        } else {
            return (
                <S.ListPatientsEmpty>
                    <SvgCss xml={listEmpity} height={250} width={250} />
                    <S.Text>
                        Você não possui pacientes cadastrados
                    </S.Text>
                    <Button
                        typeButton={'primary'}
                        textButton={'CADASTRAR PACIENTE AGORA'}
                        onPress={() => navigation.navigate('RegisterPatient')}
                        marginTop={25}
                    />
                </S.ListPatientsEmpty>
            )
        }
    }

    return (
        <S.ContainerPage>
            <RenderContent />
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}