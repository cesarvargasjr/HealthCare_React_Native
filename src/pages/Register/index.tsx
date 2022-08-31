import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

interface FormProps {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const Register = () => {

    const navigation: any = useNavigation();

    /**************** CRIAÇÃO DE USUÁRIO - FIREBASE ****************/
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleCreateAccount = ({ name, email, password }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                await addDoc(collection(db, "registerUsers"), { name, email });
                console.log('Conta criada');
                navigation.navigate('SignIn')
            })
            .catch(error => {
                console.log(error)
            })
    }
    /***************************************************************/

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

    const onSubmit = ({ name, email, password }: FormProps) => {
        handleCreateAccount({ name, email, password });
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