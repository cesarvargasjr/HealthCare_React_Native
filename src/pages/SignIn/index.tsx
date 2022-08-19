import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';

export const SignIn = () => {

    const navigation: any = useNavigation();

    return (

        // ************ SCROLLVIEW PARA INPUT / CORRIGIR IMAGE ************

        <S.ContainerPage>
            <Image
                source={require('../../assets/login.png')}
                resizeMode="contain"
                style={{ maxHeight: '40%', width: '100%' }}
            />
            <S.ContainerLogin>
                <Input
                    titleInput={'Usuário'}
                    placeholder={'Informe o usuário'}
                    typeInput={'userName'}
                />
                <Input
                    titleInput={'Senha'}
                    placeholder={'Sua senha'}
                    typeInput={'password'}
                />
            </S.ContainerLogin>
            <Button
                typeButton='primary'
                textButton={'ENTRAR'}
                onPress={() => console.log('***DEFINIR ROTA***')}
                marginTop={8}
            />
            <Button
                typeButton='secondary'
                textButton={'QUERO ME CADASTRAR'}
                onPress={() => navigation.navigate('Register')}
                marginTop={7}
            />
        </S.ContainerPage>
    )
}