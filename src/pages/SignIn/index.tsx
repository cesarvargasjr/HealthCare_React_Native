import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from 'react-native';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
// import { RFPercentage } from 'react-native-responsive-fontsize';
// import { SizeImage } from '../../utils/sizeImage';

interface FormProps {
    userName: string;
    password: string;
}

export const SignIn = () => {

    const navigation: any = useNavigation();
    // const sizes: any = SizeImage(985, 907, RFPercentage(12))
    // style={{
    //     width: sizes.width,
    //     height: sizes.height,
    // }}

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        userName: yup.string().required('Digite o seu usuário (mínimo 6 caracteres)'),
        password: yup.string().required('Digite a sua senha com 8 caracteres'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormProps) => {
        if (data !== undefined) {
            navigation.navigate('Home')
            console.log(data);
        }
    }

    return (
        <S.ContainerPage>
            <Image
                style={{
                    width: 300,
                    height: 250,
                }}
                source={require('../../assets/signIn.png')}
                resizeMode="contain"
            />
            <S.ContainerLogin>
                <Controller
                    control={control}
                    name="userName"
                    rules={{
                        minLength: 6
                    }}
                    render={({ field: { value, onChange } }) => (
                        <Input
                            typeInput={'userName'}
                            titleInput={'Usuário'}
                            placeholder={'Informe o usuário'}
                            value={value}
                            onChangeText={onChange}
                            messageError={errors?.userName?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{
                        minLength: 8
                    }}
                    render={({ field: { value, onChange } }) => (
                        <Input
                            typeInput={'password'}
                            titleInput={'Senha'}
                            placeholder={'Sua senha'}
                            value={value}
                            onChangeText={onChange}
                            messageError={errors?.password?.message}
                        />
                    )}
                />
            </S.ContainerLogin>
            <Button
                typeButton='primary'
                textButton={'ENTRAR'}
                onPress={handleSubmit(onSubmit)}
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