import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/cards/patient';
import { Button } from '../../components/button';
import { Line } from '../../components/line';

export const ListPatients = () => {

    const navigation: any = useNavigation();

    const patients = [
        {
            name: 'José da Silva',
            age: 82,

        },
        {
            name: 'Juliana dos Santos',
            age: 78,
        },
        {
            name: 'Mauro Sergio Oliveira dos Santos',
            age: 86,
        },
        {
            name: 'Maria Santos',
            age: 89,
        },
        {
            name: 'João Silveira',
            age: 89,
        },
        {
            name: 'Isabel Monteiro',
            age: 89,
        },
        {
            name: 'Joana Silva',
            age: 85,
        },
        {
            name: 'Manoel Batista',
            age: 78,
        },
    ];

    return (
        <S.ContainerPage>
            <S.ContainerCards showsVerticalScrollIndicator={false} >
                {patients.map(({ name, age }, index) => (
                    <CardPatient
                        namePatient={name}
                        agePatient={age}
                        key={index}
                    />
                ))}
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