import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Button } from '../../components/Button';
import { CardDrugs } from '../../components/Cards/Drugs';
import { Line } from '../../components/Line';
import * as S from './styles';
import { useToast } from 'react-native-toast-notifications';
import { ModalDelete } from '../../components/Modal/ModalDelete';
import Icon from 'react-native-vector-icons/FontAwesome';
import handleListDrugs from '../../services/Drugs/ListDrug';
import handleDeletePatient from '../../services/Patients/DeletePatient';
import colors from '../../utils/colors';
import { usePatient } from '../../contexts/Patient';

export const ProfilePatient = () => {

    const toast = useToast();
    const navigation: any = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const [listDrugs, setListDrugs]: any = useState([]);
    const { patient, getAge } = usePatient();

    const deletePatient = () => {
        handleDeletePatient(patient.id)
        navigation.navigate('Home')
        toast.show('Paciente excluído com sucesso', { type: 'success' })
    }

    useMemo(async () => {
        const response = await handleListDrugs();
        setListDrugs(response);
    }, [])

    return (
        <S.ContainerPage >
            <S.ContainerProfile>
                <Image
                    source={require('../../assets/iconProfile.png')}
                    resizeMode="contain"
                    style={{ height: 80, width: 80 }}
                />
                <S.ContainerInfo>
                    <S.NameProfile>{patient.namePatient}</S.NameProfile>
                    <S.TextBold>Idade: <S.Text>{getAge()} anos</S.Text></S.TextBold>
                    <S.TextBold>Peso: <S.Text>{patient.weight} kg</S.Text></S.TextBold>
                    <S.TextBold>Altura: <S.Text>{patient.height} cm</S.Text></S.TextBold>
                </S.ContainerInfo>
                <S.ContainerIcons>
                    <S.ContainerIcon onPress={() => navigation.navigate('EditPatient')} >
                        <Icon name="pencil" size={20} color={colors.grey} />
                    </S.ContainerIcon>
                    <S.ContainerIcon onPress={() => setIsOpen(true)} >
                        <Icon name="trash" size={20} color={colors.lightRed} />
                    </S.ContainerIcon>
                </S.ContainerIcons>
            </S.ContainerProfile>
            <Line
                marginBottom={4}
            />
            <S.ContainerCards showsVerticalScrollIndicator={false} >
                {listDrugs.map(({ name, daysExpired, hours, totalDrugs, daysNotifications }, index) => (
                    <CardDrugs
                        nameDrug={name}
                        daysExpired={daysExpired}
                        timerNotification={hours}
                        totalDrugs={totalDrugs}
                        daysNotifications={daysNotifications}
                        key={index}
                    />
                ))}
            </S.ContainerCards>
            <Line
                marginTop={5}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='ADICIONAR MEDICAMENTO'
                    onPress={() => navigation.navigate('RegisterRemedie')}
                    marginTop={5}
                    marginBottom={7}
                />
            </S.ContainerButton>
            {
                isOpen && (
                    <ModalDelete
                        onPress={() => (deletePatient(), setIsOpen(false))}
                        description='Deseja excluir o perfil deste paciente?'
                        closeModal={() => setIsOpen(false)}
                    />
                )
            }
        </S.ContainerPage >
    )
}