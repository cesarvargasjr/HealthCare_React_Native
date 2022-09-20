import React from 'react';
import * as S from './styles';
import { TabBar } from '../../components/TabBar';
import { CardProfileUser } from '../../components/Cards/ProfileUser';

export const ProfileUser = () => {
    return (
        <S.ContainerPage>
            <S.ContainerContent>
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