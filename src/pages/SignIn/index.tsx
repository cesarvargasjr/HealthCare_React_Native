import React, { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { RFPercentage } from 'react-native-responsive-fontsize';
import signIn from '../../assets/signIn.png';
import { SizeImage } from '../../utils/sizeImage';

export const SignIn = () => {

    const navigation: any = useNavigation();

    // const isFocused = useIsFocused();
    // useEffect(() => {
    // }, [isFocused])

    const sizes: any = SizeImage(985, 907, RFPercentage(12))

    return (
        <S.ContainerPage>
            <Image
                style={{
                    width: sizes.width,
                    height: sizes.height,
                }}
                source={signIn}
                resizeMode="contain"
            />
            <S.ContainerLogin>
                <Input
                    typeInput={'text'}
                    titleInput={'Usuário'}
                    placeholder={'Informe o usuário'}
                />
                <Input
                    typeInput={'password'}
                    titleInput={'Senha'}
                    placeholder={'Sua senha'}
                />
            </S.ContainerLogin>
            <Button
                typeButton='primary'
                textButton={'ENTRAR'}
                onPress={() => navigation.navigate('Home')}
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