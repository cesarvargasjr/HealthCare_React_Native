import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Button } from '../../components/button';
import { CardRemedies } from '../../components/cards/remedies';
import { Line } from '../../components/line';

import * as S from './styles';

export const ProfilePatient = () => {

    const navigation: any = useNavigation();

    const remedies = [
        {
            nameRemedie: 'Losartana',
            daysExpired: 16,
            timerNotification: 24,
            totalRemedies: 30,
            daysNotifications: 30,
        },
        {
            nameRemedie: 'Multigrip',
            daysExpired: 1,
            timerNotification: 12,
            totalRemedies: 7,
            daysNotifications: 1,
        },
        {
            nameRemedie: 'Paracetamol',
            daysExpired: 5,
            timerNotification: 8,
            totalRemedies: 12,
            daysNotifications: 7,
        },
    ]

    return (
        <S.ContainerPage>
            <S.ContainerProfile>
                <Image
                    source={require('../../assets/iconProfile.png')}
                    resizeMode="contain"
                    style={{ height: 100, width: 100 }}
                />
                <S.ContainerInfo>
                    <S.NameProfile>José da Silva</S.NameProfile>
                    <S.TextBold>Idade: <S.Text>80 anos</S.Text></S.TextBold>
                    <S.TextBold>Peso: <S.Text>70 kg</S.Text></S.TextBold>
                    <S.TextBold>Altura: <S.Text>1,75 M</S.Text></S.TextBold>
                </S.ContainerInfo>
            </S.ContainerProfile>
            <Line
                marginTop={6}
                marginBottom={6}
            />
            <S.ContainerCards showsVerticalScrollIndicator={true} >
                {remedies.map(({ nameRemedie, daysExpired, timerNotification, totalRemedies, daysNotifications }, index) => (
                    <CardRemedies
                        nameRemedie={nameRemedie}
                        daysExpired={daysExpired}
                        timerNotification={timerNotification}
                        totalRemedies={totalRemedies}
                        daysNotifications={daysNotifications}
                        key={index}
                    />
                ))}
            </S.ContainerCards>
            <Line
                marginTop={6}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='ADICIONAR MEDICAMENTO'
                    onPress={() => navigation.navigate('RegisterRemedie')}
                    marginTop={6}
                    marginBottom={2}
                />
                <Button
                    typeButton='primary'
                    textButton='EDITAR PERFIL'
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={2}
                    marginBottom={2}
                />
                <Button
                    typeButton='primary'
                    textButton='EXCLUIR PERFIL'
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={2}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}