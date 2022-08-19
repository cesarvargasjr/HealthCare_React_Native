import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';

export const Register = () => {

    const navigation: any = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <S.ContainerPage>
                <S.ContainerLogin>
                    <Input
                        titleInput={'Nome da Clínica/Asilo'}
                        placeholder={'Digite o nome completo'}
                        typeInput={'text'}
                    />
                    <Input
                        titleInput={'Defina um usuário'}
                        placeholder={'Usuário para login'}
                        typeInput={'userName'}
                    />
                    <Input
                        titleInput={'Senha'}
                        placeholder={'Defina uma senha'}
                        typeInput={'password'}
                    />
                    <Input
                        titleInput={'Confirmar senha'}
                        placeholder={'Repita a senha'}
                        typeInput={'password'}
                    />
                </S.ContainerLogin>
                <Button
                    typeButton='primary'
                    textButton={'CADASTRAR'}
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={10}
                    marginBottom={2}
                />
            </S.ContainerPage>
        </ScrollView>
    )
}