import React, { useEffect } from 'react';
import * as S from './styles'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { BackHandler } from 'react-native';
import { SvgCss } from 'react-native-svg';
import home from '../../assets/home.svg';

export const Home = () => {

    const navigation: any = useNavigation();

    // ******************************************* //
    // CORRIGIR BOTÃO DE VOLTAR DAS PRÓXIMAS TELAS
    // ******************************************* //

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (

        <S.ContainerPage>
            <SvgCss xml={home} height={250} width={250} />
            <Button
                typeButton={'primary'}
                textButton={'ADICIONAR UM PACIENTE'}
                onPress={() => navigation.navigate('RegisterPatient')}
                marginTop={20}
                marginBottom={4}
            />
            <Button
                typeButton={'primary'}
                textButton={'LISTAR PACIENTES'}
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