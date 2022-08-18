import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import * as S from './styles';
import { SvgCss } from 'react-native-svg';
// import register2 from '../../assets/register2.svg';

export const Register = () => {

    const navigation: any = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <S.ContainerPage>
                {/* <SvgCss xml={register2} height={250} width={250} /> */}
                <S.ContainerLogin>
                    <S.TitleInput>Nome da clínica</S.TitleInput>
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
                            placeholder='Defina uma senha'
                            placeholderTextColor='#bbbbff'
                            secureTextEntry={true}
                            style={{
                                fontSize: 16,
                                fontFamily: 'Nunito_400Regular',
                            }}
                        />
                    </S.ContainerInput>
                    <S.TitleInput>Confirmar senha</S.TitleInput>
                    <S.ContainerInput>
                        <TextInput
                            placeholder='Repita a senha'
                            placeholderTextColor='#bbbbff'
                            secureTextEntry={true}
                            style={{
                                fontSize: 16,
                                fontFamily: 'Nunito_400Regular',
                            }}
                        />
                    </S.ContainerInput>
                </S.ContainerLogin>
                <S.ContainerButton>
                    <TouchableOpacity onPress={() => console.log('***DEFINIR ROTA***')} >
                        <S.TextButton>CADASTRAR</S.TextButton>
                    </TouchableOpacity>
                </S.ContainerButton>
            </S.ContainerPage>
        </ScrollView>
    )
}