import React, { useEffect, useState } from 'react';
import * as S from './styles'
import { BackHandler, ScrollView } from 'react-native';
import { SchedulesPatients } from '../../components/Cards/SchedulesPatients';
import { CardDays } from '../../components/Cards/days';
import { TabBar } from '../../components/TabBar';
import { SliderHome } from '../../components/Cards/SliderHome';

// ******************************************* //
// CORRIGIR BOTÃO DE VOLTAR DAS PRÓXIMAS TELAS
// ******************************************* //

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
                        <CardDays selected={selected} textDay={item} id={index} onPress={setSelected} />
                    ))}
                </S.ContainerDays>
                <S.ContainerText>
                    <S.TextBold>Próximas notificações...</S.TextBold>
                </S.ContainerText>
                <SchedulesPatients />
                {/* <ScrollView
                style={{ maxHeight: 160 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <SliderHome />
            </ScrollView> */}
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}