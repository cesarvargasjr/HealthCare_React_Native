import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../../components/button';
import { AddImage } from '../../../components/cards/addImage';
import { Input } from '../../../components/input';
import * as S from './styles';

interface FormProps {
    name: string,
    age: number,
    weight: number,
    height: number,
}

export const EditPatient = () => {

    const navigation: any = useNavigation();

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        name: yup.string().required('Digite o nome completo'),
        age: yup.string().required('Digite a idade'),
        weight: yup.string().required('Digite o peso'),
        height: yup.string().required('Digite a altura'),
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
        if (name.length > 0 && age > 0 && weight > 0 && height > 0) {
            navigation.navigate('Home')
            console.log({ name, age, weight, height });
        }
    }

    return (
        <S.ContainerPage>
            <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='text'
                        titleInput='Nome'
                        placeholder='Nome completo'
                        maxLength={2}
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
                        typeInput='number'
                        titleInput='Idade'
                        placeholder='80 anos'
                        maxLength={2}
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
                        messageError={errors?.weight?.message}
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
                        messageError={errors?.height?.message}
                    />
                )}
            />
            <S.TitleCard>Foto do paciente</S.TitleCard>
            <AddImage />
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