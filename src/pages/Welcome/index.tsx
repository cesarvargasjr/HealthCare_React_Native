import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { SliderOnboarding } from '../../components/SliderOnboarding';

const slider = [
    {
        key: '1',
        image: require('../../assets/welcome.png'),
        description: 'Com o Health Care você poderá fazer o gerenciamento de seus pacientes, medicamentos e atendimentos.',
    },
    {
        key: '2',
        image: require('../../assets/registerPatients.png'),
        description: 'Cadastre seus pacientes e comece a gerenciar sua clínica.',
    },
    {
        key: '3',
        image: require('../../assets/drugs.png'),
        description: 'Após ter pacientes cadastrados insira os seus respectivos medicamentos para gerenciar os atendimentos.',
    },
];

export const Welcome = () => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerPage>
            <S.Title animation="flipInY">Health Care</S.Title>
            <SliderOnboarding slider={slider} />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton={'ACESSAR AGORA'}
                    onPress={() => navigation.navigate('SignIn')}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}