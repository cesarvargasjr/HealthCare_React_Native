import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { SvgCss } from 'react-native-svg';
import signIn from '../../assets/signIn.svg';

interface FormProps {
    userName: string;
    password: string;
}

export const SignIn = () => {

    const navigation: any = useNavigation();

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        userName: yup
            .string()
            .required('Digite o seu usuário'),
        password: yup
            .string()
            .required('Digite a sua senha'),
    });

    const {
        control,
        handleSubmit,
        setError: setFormError,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ userName, password }: FormProps) => {
        if (userName.length > 0 && password.length > 0) {
            navigation.navigate('Home')
            console.log({ userName, password });
        } else {
            userName.length === 0 &&
                setFormError('userName', {
                    type: 'manual',
                    message: 'Digite um usuário válido',
                });
            password.length === 0 &&
                setFormError('password', {
                    type: 'manual',
                    message: 'Digite uma senha válida',
                });
        }
    }

    return (
        <S.ContainerPage>
            <SvgCss xml={signIn} height={250} width={250} />
            <S.ContainerLogin>
                <Controller
                    control={control}
                    name="userName"
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