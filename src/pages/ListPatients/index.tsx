import React, { useMemo } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/Cards/Patient';
import { TabBar } from '../../components/TabBar';
import { usePatient } from '../../contexts/Patient';
import handleListPatients from '../../services/Patients/ListPatient';
import * as S from './styles';
import { SvgCss } from 'react-native-svg';
import listEmpity from '../../assets/listEmpity.svg';
import { Button } from '../../components/Button';

export const ListPatients = () => {

    const navigation: any = useNavigation();
    const { listPatients, setListPatients } = usePatient();
    const isFocused = useIsFocused();

    useMemo(async () => {
        const response = await handleListPatients();
        setListPatients(response);
    }, [isFocused])

    const renderContent = () => {
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
                    <SvgCss xml={listEmpity} height={200} width={200} style={{ marginBottom: 30 }} />
                    <S.Text>
                        Você não possui pacientes cadastrados
                    </S.Text>
                    <Button
                        typeButton={'primary'}
                        textButton={'CADASTRAR AGORA'}
                        onPress={() => navigation.navigate('RegisterPatient')}
                        marginTop={25}
                    />
                </S.ListPatientsEmpty>
            )
        }
    }

    return (
        <S.ContainerPage>
            {renderContent()}
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}