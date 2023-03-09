import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from 'react-native-toast-notifications';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import handleCreateAccount from '../../services/users/registerUser';

interface FormProps {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const RegisterUser = () => {

    const toast = useToast();
    const navigation: any = useNavigation();

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        name: yup
            .string()
            .required('Digite o nome da clínica/asilo'),
        email: yup
            .string()
            .email('Digite um e-mail válido')
            .required('E-mail para fazer login'),
        password: yup
            .string()
            .required('Digite a sua senha')
            .min(8, 'Mínimo 8 caracteres'),
        passwordConfirm: yup
            .string()
            .required('Repita a sua senha')
            .min(8, 'Mínimo 8 caracteres')
            .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = async ({ name, email, password }: FormProps) => {
        if (await handleCreateAccount({ name, email, password })) {
            navigation.navigate('SignIn')
            toast.show('Usuário cadastrado com sucesso', { type: 'success' });
        } else {
            toast.show('Já existe cadastro com este e-mail', { type: 'danger' });
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <S.ContainerPage>
                <S.ContainerLogin>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                titleInput={'Nome da Clínica/Asilo'}
                                placeholder={'Digite o nome completo'}
                                typeInput={'text'}
                                value={value}
                                onChangeText={onChange}
                                messageError={errors?.name?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                titleInput={'E-mail'}
                                placeholder={'E-mail para login'}
                                typeInput={'text'}
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
                                titleInput={'Senha'}
                                placeholder={'Defina uma senha'}
                                typeInput={'password'}
                                value={value}
                                onChangeText={onChange}
                                messageError={errors?.password?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="passwordConfirm"
                        render={({ field: { value, onChange } }) => (
                            <Input
                                titleInput={'Confirmar senha'}
                                placeholder={'Repita a senha'}
                                typeInput={'password'}
                                value={value}
                                onChangeText={onChange}
                                messageError={errors?.passwordConfirm?.message}
                            />
                        )}
                    />
                </S.ContainerLogin>
                <Button
                    typeButton='primary'
                    textButton={'CADASTRAR'}
                    onPress={handleSubmit(onSubmit)}
                    marginTop={10}
                    marginBottom={2}
                />
            </S.ContainerPage>
        </ScrollView>
    )
}