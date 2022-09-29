import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useToast } from 'react-native-toast-notifications';
import handleAddDrug from '../../services/Drugs/RegisterDrug';
import { usePatient } from '../../contexts/Patient';
import { useAuth } from '../../contexts/Auth';
interface FormDrugs {
    name: string;
    hours: number;
    totalDrugs: number;
    daysNotifications: number;
    quantityDrugs: number;
}

export const RegisterDrug = () => {

    const navigation: any = useNavigation();
    const toast = useToast();
    const { patient } = usePatient();
    const { user } = useAuth();

    const schema: yup.SchemaOf<FormDrugs> = yup.object().shape({
        name: yup
            .string()
            .required('Digite um medicamento'),
        hours: yup
            .number()
            .required('Digite a hora dos intervalos'),
        totalDrugs: yup
            .number()
            .required('Digite o total de comprimidos na cartela'),
        quantityDrugs: yup
            .number()
            .required('Digite a dosagem por medicação'),
        daysNotifications: yup
            .number()
            .required('Digite a quantidade de dias'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormDrugs>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ name, hours, totalDrugs, quantityDrugs, daysNotifications }: FormDrugs) => {
        handleAddDrug({ user, patient, name, hours, totalDrugs, quantityDrugs, daysNotifications })
        navigation.navigate('ProfilePatient')
        toast.show('Medicamento cadastrado com sucesso', { type: 'success' })
    }

    return (
        <S.ContainerPage>
            <Controller
                control={control}
                name="name"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='text'
                        placeholder='Paracetamol'
                        titleInput='Nome do medicamento'
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.name?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="hours"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        placeholder='12h'
                        titleInput='Intervalo para medicação'
                        descInput='(Exemplo: A cada 12h)'
                        maxLength={2}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.hours?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="totalDrugs"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        placeholder='30'
                        titleInput='Quantidade de comprimidos na cartela'
                        maxLength={2}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.totalDrugs?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="quantityDrugs"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        placeholder='1'
                        titleInput='Dosagem por medicação'
                        descInput='(Exemplo: 1 comprimido)'
                        maxLength={1}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.quantityDrugs?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="daysNotifications"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        placeholder='7 dias'
                        titleInput='Tratamento por quantos dias'
                        maxLength={2}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.daysNotifications?.message}
                    />
                )}
            />

            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR'
                    onPress={handleSubmit(onSubmit)}
                    marginTop={5}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}