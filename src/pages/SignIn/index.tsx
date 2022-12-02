import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from '../../contexts/Auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { SvgCss } from 'react-native-svg';
import * as yup from 'yup';
import * as S from './styles';
import ImageSignIn from '../../assets/signIn.svg';
import handleSignIn from '../../services/Users/SignIn';

interface FormProps {
    email: string;
    password: string;
}

export const SignIn: React.FC = () => {

    const toast = useToast();
    const { signIn } = useAuth();
    const navigation: any = useNavigation();

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        email: yup
            .string()
            .email('Digite um e-mail válido')
            .required('Digite o seu e-mail'),
        password: yup
            .string()
            .required('Digite a sua senha')
            .min(8, 'Mínimo 8 caracteres'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ email, password }: FormProps) => {
        signIn(email)
        handleSignIn({ email, password })
            .then(() => {
                navigation.navigate('Home')
            })
            .catch(error => {
                console.log(error);
                toast.show('Usuário e/ou senha inválidos', {
                    type: 'danger',
                });
            });
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
            <S.ContainerPage keyboardShouldPersistTaps="handled">
                <SvgCss xml={ImageSignIn} height={250} width={250} />
                <S.ContainerLogin>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                typeInput={'text'}
                                titleInput={'E-mail'}
                                placeholder={'nome@email.com'}
                                value={value}
                                onChangeText={onChange}
                                messageError={errors?.email?.message}
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
                    onPress={() => navigation.navigate('RegisterUser')}
                    marginTop={7}
                />
            </S.ContainerPage>
        </KeyboardAvoidingView>
    )
}