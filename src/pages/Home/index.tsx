import React, { useEffect } from 'react';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/button';
import { Image, BackHandler } from 'react-native';

export const Home = () => {

    const navigation: any = useNavigation();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (
        <S.ContainerPage>
            <Image
                source={require('../../assets/home.png')}
                resizeMode="contain"
                style={{ maxHeight: '40%', width: '100%', marginTop: '5%' }}
            />
            <Button
                typeButton={'primary'}
                textButton={'ADICIONAR UM IDOSO'}
                onPress={() => console.log('***DEFINIR ROTA***')}
                marginTop={25}
                marginBottom={4}
            />
            <Button
                typeButton={'primary'}
                textButton={'LISTAR IDOSOS'}
                onPress={() => console.log('***DEFINIR ROTA***')}
                marginTop={4}
                marginBottom={4}
            />
            <Button
                typeButton={'primary'}
                textButton={'MEU PERFIL'}
                onPress={() => console.log('***DEFINIR ROTA***')}
                marginTop={4}
                marginBottom={4}
            />
            <Button
                typeButton={'primary'}
                textButton={'SAIR'}
                onPress={() => navigation.navigate('SignIn')}
                marginTop={4}
                marginBottom={4}
            />
        </S.ContainerPage>
    )
}