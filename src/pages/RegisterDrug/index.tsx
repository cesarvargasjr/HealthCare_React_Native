import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useToast } from 'react-native-toast-notifications';
import { usePatient } from '../../contexts/Patient';
import { useAuth } from '../../contexts/Auth';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import handleAddDrug from '../../services/Drugs/RegisterDrug';
import * as S from './styles';
import * as yup from 'yup';
interface FormDrugs {
    name: string;
    // hours: number;
    totalDrugs: number;
    daysNotifications: number;
    quantityDrugs: number;
    dateInitialNotification: string;
    timeNotification: string;
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
        // hours: yup
        //     .number()
        //     .required('Digite a hora dos intervalos'),
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

    // *************** Componente para registro de Data e Hora *************** //
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    const timeNotification = time.toString().slice(15, 21);

    const dateInitialNotification = date.toString().slice(4, 16);
    const [month, day, year] = date.toLocaleDateString().split('/')
    const dateInitial = `${day}/${month}/${year}`;

    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };
    // *********************************************************************** //

    const onSubmit = ({ name, totalDrugs, quantityDrugs, daysNotifications }: FormDrugs) => {
        handleAddDrug({ user, patient, name, totalDrugs, quantityDrugs, daysNotifications, dateInitialNotification, timeNotification })
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
            {/* <Controller
                control={control}
                name="hours"
                render={({ field: { value, onChange } }) => (
                    <Input
                        typeInput='number'
                        placeholder='12h'
                        titleInput='Intervalo da medicação'
                        descInput='(Exemplo: A cada 12h)'
                        maxLength={2}
                        value={value}
                        onChangeText={onChange}
                        messageError={errors?.hours?.message}
                    />
                )}
            /> */}
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

            <S.TitleTouchDateTime>Data de início</S.TitleTouchDateTime>
            <S.ContainerInfoDateTime onPress={showDatePicker}>
                <S.TextDateTime>{dateInitial}</S.TextDateTime>
                {/* <Icon name="pencil" size={18} color={colors.grey} style={{ marginLeft: 6 }} /> */}
            </S.ContainerInfoDateTime>
            <S.TitleTouchDateTime>Hora da medicação</S.TitleTouchDateTime>
            <S.ContainerInfoDateTime onPress={showTimePicker}>
                <S.TextDateTime>{time.toLocaleTimeString('pt-US').slice(0, 5)}</S.TextDateTime>
                {/* <Icon name="pencil" size={18} color={colors.grey} style={{ marginLeft: 6 }} /> */}
            </S.ContainerInfoDateTime>

            {datePicker && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 320,
                        height: 260,
                        display: 'flex',
                    }}
                />
            )}

            {timePicker && (
                <DateTimePicker
                    value={time}
                    mode={'time'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={false}
                    onChange={onTimeSelected}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 320,
                        height: 260,
                    }}
                />
            )}

            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR'
                    onPress={handleSubmit(onSubmit)}
                    marginTop={4}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}