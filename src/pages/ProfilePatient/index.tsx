import React, { useMemo, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { usePatient } from '../../contexts/Patient';
import { Image } from 'react-native';
import { Button } from '../../components/Button';
import { CardDrugs } from '../../components/Cards/Drugs';
import { Line } from '../../components/Line';
import { useToast } from 'react-native-toast-notifications';
import { ModalDelete } from '../../components/Modal/ModalDelete';
import { SvgCss } from 'react-native-svg';
import { TabBar } from '../../components/TabBar';
import listEmpity from '../../assets/listEmpity.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import handleListDrugs from '../../services/Drugs/ListDrug';
import handleDeletePatient from '../../services/Patients/DeletePatient';
import colors from '../../utils/colors';
import * as S from './styles';

export const ProfilePatient = () => {

    const toast = useToast();
    const navigation: any = useNavigation();
    const isFocused = useIsFocused();
    const [isOpen, setIsOpen] = useState(false);
    const [listDrugs, setListDrugs]: any = useState([]);
    const { patient, getAge } = usePatient();

    const deletePatient = () => {
        handleDeletePatient(patient.id)
        navigation.navigate('Home')
        toast.show('Paciente excluído com sucesso', { type: 'success' })
    }

    const RenderListDrugs = () => {
        if (listDrugs?.length > 0) {
            return (
                listDrugs?.map(({ id, name, daysExpired, hours, totalDrugs, daysNotifications, timeNotification, dateInitialNotification }, index) => (
                    <CardDrugs
                        id={id}
                        nameDrug={name}
                        daysExpired={daysExpired}
                        timeNotification={timeNotification}
                        totalDrugs={totalDrugs}
                        daysNotifications={daysNotifications}
                        key={index}
                        setListDrugs={setListDrugs}
                        dateInitial={dateInitialNotification}
                    />
                ))
            )
        } else {
            return (
                <S.ListDrugsEmpty>
                    <SvgCss xml={listEmpity} height={150} width={150} style={{ marginBottom: 40 }} />
                    <S.TextListEmpty>
                        Este paciente não possui medicamentos cadastrados
                    </S.TextListEmpty>
                </S.ListDrugsEmpty>
            )
        }
    }

    useMemo(
        async () => {
            const response = await handleListDrugs();
            setListDrugs(response.sort((a, b) => a.timeNotification > b.timeNotification ? 1 : -1));
        }, [isFocused])

    return (
        <S.ContainerPage >
            {
                isOpen && (
                    <ModalDelete
                        onPress={() => (deletePatient(), setIsOpen(false))}
                        description='Deseja excluir o perfil deste paciente?'
                        closeModal={() => setIsOpen(false)}
                    />
                )
            }
            <S.ContainerContent>
                <S.ContainerProfile>
                    {/* <Image
                    source={require('../../assets/iconProfile.png')}
                    resizeMode="contain"
                    style={{ height: 75, width: 75 }}
                /> */}
                    {/* <Icon name="id-card-o" size={60} color={colors.purple} /> */}
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
                <Line marginTop={2} />
                <S.ContainerCards showsVerticalScrollIndicator={false} >
                    <RenderListDrugs />
                </S.ContainerCards>
                <Line />
                <S.ContainerButton>
                    <Button
                        typeButton='primary'
                        textButton='NOVO MEDICAMENTO'
                        onPress={() => navigation.navigate('RegisterDrug')}
                        marginTop={5}
                        marginBottom={7}
                    />
                </S.ContainerButton>
            </S.ContainerContent>
            {/* <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar> */}
        </S.ContainerPage>
    )
}