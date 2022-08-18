import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TextInput } from 'react-native';
import * as S from './styles';
import { Button } from '../../components/button';

export const SignIn = () => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerPage>
            <Image
                source={require('../../assets/login.png')}
                resizeMode="contain"
                style={{ maxHeight: '40%', width: '100%' }}
            />
            <S.ContainerLogin>
                <S.TitleInput>Usuário</S.TitleInput>
                <S.ContainerInput>
                    <TextInput
                        placeholder='Informe o usuário'
                        placeholderTextColor='#bbbbff'
                        style={{
                            fontSize: 16,
                            fontFamily: 'Nunito_400Regular',
                        }}
                    />
                </S.ContainerInput>
                <S.TitleInput>Senha</S.TitleInput>
                <S.ContainerInput>
                    <TextInput
                        placeholder='Sua senha'
                        placeholderTextColor='#bbbbff'
                        secureTextEntry={true}
                        style={{
                            fontSize: 16,
                            fontFamily: 'Nunito_400Regular',
                        }}
                    />
                </S.ContainerInput>
            </S.ContainerLogin>
            <Button
                typeButton='primary'
                textButton={'ENTRAR'}
                onPress={() => console.log('***DEFINIR ROTA***')}
                marginTop={8}
                marginBottom={0}
            />
            <Button
                typeButton='secondary'
                textButton={'QUERO ME CADASTRAR'}
                onPress={() => navigation.navigate('Register')}
                marginTop={7}
                marginBottom={0}
            />
        </S.ContainerPage>
    )
}