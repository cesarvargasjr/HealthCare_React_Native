import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';
import { Button } from '../../../components/button';
import { useNavigation } from '@react-navigation/native';

interface CardProps {
    namePatient: string;
    agePatient: number;
}

export const CardPatient = ({ namePatient, agePatient }: CardProps) => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerCard>
            <S.ContainerDescription>
                <S.ContainerInfo>
                    <S.TextBold>Nome: <S.Text>{namePatient}</S.Text></S.TextBold>
                    <S.TextBold>Idade: <S.Text>{agePatient} anos</S.Text></S.TextBold>
                </S.ContainerInfo>
                <Image
                    source={require('../../../assets/iconProfile.png')}
                    resizeMode="contain"
                    style={{ height: 56, width: 60 }}
                />
            </S.ContainerDescription>
            <Button
                typeButton='secondary'
                textButton='Ver mais detalhes'
                onPress={() => navigation.navigate('ProfilePatient')}
                marginTop={3}
                width={46}
            />
        </S.ContainerCard>
    )
}