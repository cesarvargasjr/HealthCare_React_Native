import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'react-native-toast-notifications';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { SvgCss } from 'react-native-svg';
import ImageSignIn from '../../assets/signIn.svg';
import handleSignIn from '../../services/Users/SignIn';
import { AuthContext } from '../../contexts/Auth';

interface FormProps {
    email: string;
    password: string;
}

export const SignIn: React.FC = () => {

    const toast = useToast();
    const { signIn }: any = useContext(AuthContext);
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
        signIn({ email })
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
    }

    return (
        <S.ContainerPage>
            <SvgCss xml={ImageSignIn} height={250} width={250} />
            <S.ContainerLogin>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { value, onChange } }) => (
                        <Input
                            typeInput={'text'}
                            titleInput={'E-mail'}
                            placeholder={'Informe o usuário'}
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
                // onPress={handleSubmit(onSubmit)}
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