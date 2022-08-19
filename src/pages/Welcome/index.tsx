import React from 'react';
import * as S from './styles';
import * as Animation from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/button';

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
            <Button
                typeButton='primary'
                textButton={'ACESSAR AGORA'}
                onPress={() => navigation.navigate('SignIn')}
                marginTop={35}
            />
        </S.ContainerPage>
    )
}