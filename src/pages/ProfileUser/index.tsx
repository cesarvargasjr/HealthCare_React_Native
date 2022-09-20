import React from 'react';
import { TabBar } from '../../components/TabBar';
import * as S from './styles';

export const ProfileUser = () => {
    return (
        <S.ContainerPage>
            <S.ContainerContent>
                <S.Text>
                    Screen em desenvolvimento
                </S.Text>
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}