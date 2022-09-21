import React from 'react';
import * as S from './styles';
import { TabBar } from '../../components/TabBar';
import { CardProfileUser } from '../../components/Cards/ProfileUser';
import { SvgCss } from 'react-native-svg';
import clinic from '../../assets/clinic.svg';
import { usePatient } from '../../contexts/Patient';
import { useAuth } from '../../contexts/Auth';

export const ProfileUser = () => {

    const { listPatients } = usePatient();
    const { user } = useAuth();

    return (
        <S.ContainerPage>
            <S.ContainerContent>
                <SvgCss xml={clinic} height={200} width={200} style={{ marginBottom: 30 }} />
                <CardProfileUser
                    nameUser={user.email}
                    totalPatients={listPatients.length}
                />
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}