import React from 'react';
import { useToast } from 'react-native-toast-notifications';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../../components/Button';
import { AddImage } from '../../../components/Cards/AddImage';
import { Input } from '../../../components/Input';
import handleCreatePatient from '../../../services/Patients/RegisterPatient';

interface FormProps {
    name: string,
    age: number,
    weight: number,
    height: number,
}

export const RegisterPatient = () => {

    const navigation: any = useNavigation();
    const toast = useToast();

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        name: yup
            .string()
            .required('Digite o nome completo'),
        age: yup
            .string()
            .required('Digite a data de nascimento'),
        // .max(new Date(), 'Não é possível incluir uma data futura'),
        // .min(2, 'Mínimo dois caracteres'),
        weight: yup
            .string()
            .required('Digite o peso'),
        height: yup
            .string()
            .required('Digite a altura')
            .min(3, 'Digite três caracteres'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ name, age, weight, height }: FormProps) => {
        handleCreatePatient({ name, age, weight, height })
        navigation.navigate('Home')
        toast.show('Paciente cadastrado com sucesso', { type: 'success' })
    }

    return (
        <S.ContainerPage>
            <Controller
                control={control}
                name="name"
                rules={{
                    minLength: 5,
                }}
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='text'
                        titleInput='Nome'
                        placeholder='Nome completo'
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.name?.message}

                    />
                )}
            />
            <Controller
                control={control}
                name="age"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='date'
                        titleInput='Data de nascimento'
                        placeholder='01/01/1900'
                        maxLength={10}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.age?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="height"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        titleInput='Altura (cm)'
                        placeholder='175'
                        maxLength={3}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.height?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="weight"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        titleInput='Peso (Kg)'
                        placeholder='80'
                        maxLength={3}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.weight?.message}
                    />
                )}
            />
            <S.TitleCard>Foto do paciente</S.TitleCard>
            <S.ContainerAddImage>
                <AddImage />
            </S.ContainerAddImage>
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR'
                    onPress={handleSubmit(onSubmit)}
                    marginTop={10}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}