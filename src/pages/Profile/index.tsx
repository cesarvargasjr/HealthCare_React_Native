import React from 'react';
import { TabBar } from '../../components/TabBar';
import * as S from './styles';

export const Profile = () => {
    return (
        <S.ContainerPage>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}