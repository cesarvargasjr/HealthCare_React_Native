import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { SchedulesPatients } from '../../components/Cards/SchedulesPatients';
import { CardDays } from '../../components/Cards/Days';
import { TabBar } from '../../components/TabBar';
import { SliderHome } from '../../components/SliderHome';
import * as S from './styles'

const slider = [
    {
        key: '1',
        image: require('../../assets/indoorBike.png'),
        title: 'Exercício físico e seus benefícios, qual o seu impacto no dia a dia...',
        textButton: 'Quero saber mais',
        link: 'BUTTON ATIVIDADE FÍSICA'
    },
    {
        key: '2',
        image: require('../../assets/breakfast.png'),
        title: 'A importância de uma alimentação saudável...',
        textButton: 'Quero saber mais',
        link: 'BUTTON ALIMENTAÇÃO'
    },
    {
        key: '3',
        image: require('../../assets/drugs.png'),
        title: 'Medicamento na hora certa, por que é tão importante...',
        textButton: 'Quero saber mais',
        link: 'BUTTON MEDICAMENTO NA HORA CERTA'
    },
];

export const Home = () => {

    const [selected, setSelected] = useState(1);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (
        <S.ContainerPage>
            <S.ContainerContent>
                <S.ContainerDays>
                    {['Ontem', 'Hoje', 'Amanhã'].map((item, index) => (
                        <CardDays selected={selected} textDay={item} id={index} onPress={setSelected} key={index} />
                    ))}
                </S.ContainerDays>
                <S.ContainerText>
                    <S.TextBold>Agendamentos...</S.TextBold>
                </S.ContainerText>
                <SchedulesPatients />
                <SliderHome slider={slider} />
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}