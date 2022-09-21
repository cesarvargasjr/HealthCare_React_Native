import React from 'react';
import * as S from './styles';
import { TabBar } from '../../components/TabBar';
import { CardProfileUser } from '../../components/Cards/ProfileUser';
import { SvgCss } from 'react-native-svg';
import clinic from '../../assets/clinic.svg';

export const ProfileUser = () => {
    return (
        <S.ContainerPage>
            <S.ContainerContent>
                <SvgCss xml={clinic} height={200} width={200} style={{ marginBottom: 30 }} />
                <CardProfileUser
                    nameUser={'Nome da Clínica'}
                    totalPatients={31}
                />
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}