import React, { useEffect } from 'react';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/button';
import { Image, BackHandler } from 'react-native';

export const Home = () => {

    const navigation: any = useNavigation();

    // CORRIGIR BOTÃO DE VOLTAR DAS PRÓXIMAS TELAS

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
                onPress={() => navigation.navigate('RegisterPatient')}
                marginTop={25}
                marginBottom={4}
            />
            <Button
                typeButton={'primary'}
                textButton={'LISTAR IDOSOS'}
                onPress={() => navigation.navigate('ListPatients')}
                marginTop={4}
                marginBottom={4}
            />
            <Button
                typeButton={'primary'}
                textButton={'MEU PERFIL'}
                onPress={() => navigation.navigate('Profile')}
                marginTop={4}
                marginBottom={4}
            />
            <Button
                typeButton={'tertiary'}
                textButton={'SAIR'}
                onPress={() => navigation.navigate('SignIn')}
                marginTop={4}
                marginBottom={4}
            />
        </S.ContainerPage>
    )
}