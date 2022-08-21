import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/cards/patient';
import { Button } from '../../components/button';
import { Line } from '../../components/line';

export const ListPatients = () => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerPage>
            <S.ContainerCards>
                <CardPatient onPress={() => navigation.navigate('ProfilePatient')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
                <CardPatient onPress={() => console.log('***DEFINIR ROTA***')} />
            </S.ContainerCards>
            <Line
                marginTop={10}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='VOLTAR'
                    onPress={() => navigation.navigate('Home')}
                    marginTop={8}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}