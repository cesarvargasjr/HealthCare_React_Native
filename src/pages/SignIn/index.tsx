import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TextInput, TouchableOpacity } from 'react-native';
import * as S from './styles';

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
            <S.ContainerButton onPress={() => console.log('***DEFINIR ROTA***')} >
                <S.TextButton>ENTRAR</S.TextButton>
            </S.ContainerButton>
            <S.ContainerButtonNewUser onPress={() => navigation.navigate('Register')}>
                <S.TextButtonNewUser>QUERO ME CADASTRAR</S.TextButtonNewUser>
            </S.ContainerButtonNewUser>
        </S.ContainerPage>
    )
}