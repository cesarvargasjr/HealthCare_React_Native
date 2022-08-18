import React from 'react';
import { Image, TextInput, TouchableOpacity } from 'react-native';
import * as S from './styles';

export const SignIn = () => {
    return (
        <S.ContainerPage>
            <Image
                source={require('../../assets/login.png')}
                resizeMode="contain"
                style={{ maxHeight: '40%', width: '100%' }}
            />
            <S.Title>Login</S.Title>
            <S.ContainerLogin>
                <S.TitleInput>Usuário</S.TitleInput>

                <S.ContainerInput>
                    <TextInput
                        placeholder='Informe o usuário'
                    />
                </S.ContainerInput>
                <S.TitleInput>Senha</S.TitleInput>
                <S.ContainerInput>
                    <TextInput
                        placeholder='Sua senha'
                    />
                </S.ContainerInput>
            </S.ContainerLogin>
            <S.ContainerButton>
                <TouchableOpacity onPress={() => console.log('DEFINIR ROTA')} >
                    <S.TextButton>ENTRAR</S.TextButton>
                </TouchableOpacity>
            </S.ContainerButton>
            <S.ContainerButton>
                <TouchableOpacity onPress={() => console.log('DEFINIR ROTA')} >
                    <S.TextButtonNewUser>QUERO ME CADASTRAR</S.TextButtonNewUser>
                </TouchableOpacity>
            </S.ContainerButton>
        </S.ContainerPage>
    )
}