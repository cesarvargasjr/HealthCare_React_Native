import React from 'react';
import { Image } from 'react-native';
import { Button } from '../../components/button';
import { CardRemedies } from '../../components/cards/remedies';
import { Line } from '../../components/line';

import * as S from './styles';

export const ProfilePatient = () => {
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
                marginTop={9}
            />
            <S.ContainerCards>
                <CardRemedies />
                <CardRemedies />
                <CardRemedies />
                <CardRemedies />
            </S.ContainerCards>
            <Line
                marginTop={7}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='ADICIONAR MEDICAMENTO'
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={8}
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