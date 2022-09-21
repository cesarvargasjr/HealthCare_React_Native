import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../../components/Button';
import { AddImage } from '../../../components/Cards/AddImage';
import { Input } from '../../../components/Input';
import * as S from './styles';
import { useToast } from 'react-native-toast-notifications';
import handleUpdatePatient from '../../../services/Patients/UpdatePatient';
import { FormPatient, usePatient } from '../../../contexts/Patient';

// ***********************************************************************************//
// TELA DE EDITAR PERFIL DO PACIENTE, CAMPOS NÃO SÃO OBRIGATÓRIO, NOME VEM ESTÁTICO   //
// PODERIA TRAZER OS DADOS CADASTRADOS DO USUÁRIO PODENDO EDITAR O INPUT PARA ALTERAR //                 //
// ***********************************************************************************//

export const EditPatient = () => {

    const navigation: any = useNavigation();
    const toast = useToast();
    const { patient } = usePatient();

    const schema: yup.SchemaOf<FormPatient> = yup.object().shape({
        namePatient: yup
            .string()
            .required('Digite o nome completo'),
        date: yup
            .string()
            .required('Digite a data de nascimento'),
        weight: yup
            .string()
            .required('Digite o peso'),
        height: yup
            .string().required('Digite a altura')
            .required('Digite a altura')
            .min(3, 'Digite três caracteres'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormPatient>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ namePatient, date, weight, height }: FormPatient) => {
        const idPatient = patient.id;
        handleUpdatePatient({ idPatient, namePatient, date, weight, height })
        navigation.navigate('Home')
        toast.show('Paciente atualizado com sucesso', { type: 'success' })
    }

    return (
        <S.ContainerPage>
            <Controller
                control={control}
                name="namePatient"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='text'
                        titleInput='Nome'
                        placeholder='Nome completo'
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.namePatient?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="date"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='date'
                        titleInput='Data de nascimento'
                        placeholder='01/01/1900'
                        maxLength={10}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.date?.message}
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
            <S.TitleCard>Alterar Foto</S.TitleCard>
            <S.ContainerAddImage>
                <AddImage />
            </S.ContainerAddImage>
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR ALTERAÇÕES'
                    onPress={handleSubmit(onSubmit)}
                    marginTop={10}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}