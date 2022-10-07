import React, { useEffect, useMemo, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { SchedulesPatients } from '../../components/Cards/SchedulesPatients';
import { TabBar } from '../../components/TabBar';
import { Button } from '../../components/Button';
import { CountInfo } from '../../components/Cards/CountInfo';
import { handleListAllDrugs } from '../../services/Drugs/ListDrug';
import { useAuth } from '../../contexts/Auth';
import { usePatient } from '../../contexts/Patient';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import months from '../../utils/months';
import handleListPatients from '../../services/Patients/ListPatient';
import * as S from './styles'

export const Home = () => {

    const isFocused = useIsFocused();
    const navigation: any = useNavigation();

    const { user } = useAuth();
    const { listPatients, setListPatients } = usePatient();
    const [listSchedules, setListSchedules]: any = useState([]);

    const [month, day] = new Date().toLocaleDateString().split('/');
    const dateNow = `${day} de ${months[month]}`;

    // REMOVER AÇÃO DO BOTÃO DE VOLTAR DO CELULAR (NATIVO)
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    useMemo(async () => {
        const responsePatients = await handleListPatients();
        setListPatients(responsePatients);

        const responseDrugs: any = await handleListAllDrugs(user)
        setListSchedules(responseDrugs)
    }, [isFocused]);

    return (
        <S.ContainerPage>
            <S.ContainerContent>
                <S.ContainerDateNow>
                    <Icon name="calendar" size={20} color={colors.grey} />
                    <S.TextDateNow>{dateNow}</S.TextDateNow>
                </S.ContainerDateNow>
                <S.ContainerCards>
                    <CountInfo
                        nameIcon='calendar'
                        title='Atendimentos diários'
                        number={listSchedules.length}
                        onPress={() => navigation.navigate('AllSchedules')}
                    />
                    <CountInfo
                        nameIcon='users'
                        title='Pacientes cadastrados'
                        number={listPatients.length}
                        onPress={() => navigation.navigate('ListPatients')}
                    />
                </S.ContainerCards>

                {/* >>>>>> FILTRO DE AGENDAMENTOS CONFORME O DIA <<<<<<
                // const [selected, setSelected] = useState(1);
                <S.ContainerDays>
                    {['Ontem', 'Hoje', 'Amanhã'].map((item, index) => (
                        <CardDays selected={selected} textDay={item} id={index} onPress={setSelected} key={index} />
                    ))}
                </S.ContainerDays> */}

                <S.ContainerText>
                    <S.TextBold>Próximos atendimentos...</S.TextBold>
                </S.ContainerText>
                <SchedulesPatients />
                <S.ContainerButton>
                    <Button
                        typeButton='secondary'
                        textButton='Ver todos'
                        onPress={() => navigation.navigate('AllSchedules')}
                        width={25}
                        marginTop={1}
                        marginBottom={7}
                    />
                </S.ContainerButton>
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
            {/* <S.ContainerAddPatient>
                <Icon
                    name="plus-circle"
                    size={70}
                    color={colors.purple}
                    onPress={() => navigation.navigate('RegisterPatient')}
                />
            </S.ContainerAddPatient> */}
        </S.ContainerPage>
    )
}