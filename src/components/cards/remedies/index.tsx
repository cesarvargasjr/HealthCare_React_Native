import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';

interface CardProps {
    onPress?: () => void;
}

export const CardRemedies = () => {
    return (
        <S.ContainerCard>
            <S.ContainerLine>
                <S.TextBold>Losartana</S.TextBold>
                <S.ContainerTimer>
                    <Image
                        source={require('../../../assets/iconClock.png')}
                        resizeMode="contain"
                        style={{ height: 20, width: 20, marginRight: 3 }}
                    />
                    <S.TextHour>24h</S.TextHour>
                </S.ContainerTimer>
            </S.ContainerLine>
            <S.ContainerLine>
                <S.TextDays>Restam ainda 8 dias...</S.TextDays>
                <Image
                    source={require('../../../assets/iconTrash.png')}
                    resizeMode="contain"
                    style={{ height: 20, width: 20 }}
                />
            </S.ContainerLine>
        </S.ContainerCard>
    )
}