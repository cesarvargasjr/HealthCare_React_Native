import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../utils/colors';
import * as S from './styles';
import { Image } from 'react-native';

interface ContentProps {
    name: string;
    timeNotification: string;
    index: number;
}

export const ContentSchedules = ({ name, timeNotification, index }: ContentProps) => {

    return (
        <S.ContainerDescription index={index}>
            <S.ContainerInfo>
                <S.ContentPatient>
                    {/*<Image
                        source={require('../../../../assets/iconProfile.png')}
                        resizeMode="contain"
                        style={{ height: 25, width: 25 }}
                    /> */}
                    <Icon name="user-o" size={19} color={colors.purple} />
                    <S.TextBold>{name}</S.TextBold>
                </S.ContentPatient>
                <S.ContentPatient>
                    <Icon name="clock-o" size={19} color={colors.lightGreen} />
                    <S.Text>{timeNotification}</S.Text>
                </S.ContentPatient>
            </S.ContainerInfo>
        </S.ContainerDescription>
    )
}