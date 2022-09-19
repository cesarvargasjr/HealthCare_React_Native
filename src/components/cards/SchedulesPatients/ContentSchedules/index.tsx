import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';
import { Image } from 'react-native';

interface ContentProps {
    namePatient: string;
    index: number;
}

export const ContentSchedules = ({ namePatient, index }: ContentProps) => {

    return (
        <S.ContainerDescription index={index}>
            <S.ContainerInfo>
                <S.ContentPatient>
                    <Image
                        source={require('../../../../assets/iconProfile.png')}
                        resizeMode="contain"
                        style={{ height: 25, width: 25 }}
                    />
                    <S.TextBold>{namePatient}</S.TextBold>
                </S.ContentPatient>
                <S.ContentPatient>
                    <Icon name="bell" size={16} color="#51d17e" />
                    <S.Text> 12:30</S.Text>
                </S.ContentPatient>
            </S.ContainerInfo>
        </S.ContainerDescription>
    )
}