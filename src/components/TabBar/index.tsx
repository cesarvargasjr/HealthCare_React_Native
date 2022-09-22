import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const TabBar = () => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerTab>
            <S.ContainerIcon onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={20} color='#FFF' />
                <S.Text>Home</S.Text>
            </S.ContainerIcon>
            <S.ContainerIcon onPress={() => navigation.navigate('RegisterPatient')}>
                <Icon name="plus-circle" size={20} color='#FFF' />
                <S.Text>Novo Paciente</S.Text>
            </S.ContainerIcon>
            <S.ContainerIcon onPress={() => navigation.navigate('ListPatients')}>
                <Icon name="address-card" size={20} color='#FFF' />
                <S.Text>Pacientes</S.Text>
            </S.ContainerIcon>
            {/* <S.ContainerIcon onPress={() => navigation.navigate('ProfileUser')}>
                <Icon name="user-o" size={20} color='#FFF' />
                <S.Text>Meu Perfil</S.Text>
            </S.ContainerIcon> */}
        </S.ContainerTab>
    )
}