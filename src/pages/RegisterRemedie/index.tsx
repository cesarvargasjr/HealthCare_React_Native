import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useToast } from 'react-native-toast-notifications';
import handleAddDrug from '../../services/Drugs/RegisterDrug';

interface FormProps {
    name: string;
    hours: number;
    totalDrugs: number;
    daysNotifications: number;
}

export const RegisterRemedie = () => {

    const navigation: any = useNavigation();
    const toast = useToast();

    const schema: yup.SchemaOf<FormProps> = yup.object().shape({
        name: yup
            .string()
            .required('Digite um medicamento'),
        hours: yup
            .string()
            .required('Digite a hora dos intervalos'),
        totalDrugs: yup
            .string()
            .required('Digite o total de comprimidos na cartela'),
        daysNotifications: yup
            .string()
            .required('Digite a quantidade de dias'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = ({ name, hours, totalDrugs, daysNotifications }: FormProps) => {
        handleAddDrug({ name, hours, totalDrugs, daysNotifications })
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
                        placeholder='A cada 12h'
                        titleInput='Intervalo para medicação'
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
                name="daysNotifications"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        placeholder='7 dias'
                        titleInput='Lembrete por quantos dias'
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