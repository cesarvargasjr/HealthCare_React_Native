import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as S from './styles';
import * as Animation from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerPage>
            <Animation.Image
                source={require('../../assets/welcome.png')}
                resizeMode="contain"
                style={{ maxHeight: '40%', width: '100%', marginTop: '10%' }}
                animation="flipInY"
            />
            <S.Title animation="flipInY">
                Health Care
            </S.Title>
            <S.ContainerButton animation="flipInY">
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                    <S.TextButton>ACESSAR AGORA</S.TextButton>
                </TouchableOpacity>
            </S.ContainerButton>
        </S.ContainerPage>
    )
}