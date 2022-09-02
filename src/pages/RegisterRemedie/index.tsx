import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { useToast } from 'react-native-toast-notifications';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import { addDoc, collection, doc, getFirestore } from 'firebase/firestore';

interface FormProps {
    name: string;
    hours: number;
    totalDrugs: number;
    daysNotifications: number;
}

export const RegisterRemedie = () => {

    const navigation: any = useNavigation();
    const toast = useToast();

    /*********************** CADASTRO DE MEDICAMENTOS - FIREBASE ***********************/
    const handleAddDrug = ({ name, hours, totalDrugs, daysNotifications }) => {

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const collectionName = collection(db, 'registerDrugs')
        const idPatient = '3g8QKgUp5m8OIgWdRrjQ'

        function getDocRef(idRef, collection) {
            return doc(db, collection.path, idRef)
        }

        addDoc(collection(db, "registerDrugs"),
            {
                name,
                hours,
                totalDrugs,
                daysNotifications,
                user: getDocRef(idPatient, collectionName),
            })
            .then(() => {
                navigation.navigate('Home')
                toast.show('Medicamento cadastrado com sucesso', {
                    type: 'success',
                });
            })
            .catch(error => {
                console.log(error)
                toast.show(
                    'Não foi possivel efetuar o cadastro do medicamento, tente novamente', {
                    type: 'error'
                });
            })
    }
    /***********************************************************************************/

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