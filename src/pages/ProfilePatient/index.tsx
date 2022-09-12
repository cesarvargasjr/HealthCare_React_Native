import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Button } from '../../components/Button';
import { CardDrugs } from '../../components/Cards/Drugs';
import { Line } from '../../components/Line';
import * as S from './styles';
import { useToast } from 'react-native-toast-notifications';
import { ModalDelete } from '../../components/Modal/ModalDelete';
import handleListDrugs from '../../services/Drugs/ListDrug';
import handleDeletePatient from '../../services/Patients/DeletePatient';

export const ProfilePatient = () => {

    const toast = useToast();
    const navigation: any = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const [listDrugs, setListDrugs]: any = useState([]);

    const deletePatient = () => {
        handleDeletePatient()
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
                    style={{ height: 100, width: 100 }}
                />
                <S.ContainerInfo>
                    <S.NameProfile>José Carlos da Silva</S.NameProfile>
                    <S.TextBold>Idade: <S.Text>80 anos</S.Text></S.TextBold>
                    <S.TextBold>Peso: <S.Text>70 kg</S.Text></S.TextBold>
                    <S.TextBold>Altura: <S.Text>175 cm</S.Text></S.TextBold>
                    <S.ContainerButtonProfile>
                        <Button
                            typeButton='secondary'
                            textButton='Editar Perfil'
                            width={55}
                            onPress={() => navigation.navigate('EditPatient')}
                            marginTop={5}
                        />
                    </S.ContainerButtonProfile>
                </S.ContainerInfo>
            </S.ContainerProfile>
            <Line
                marginTop={6}
                marginBottom={6}
            />
            <S.ContainerCards showsVerticalScrollIndicator={true} >
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
                marginTop={6}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='ADICIONAR MEDICAMENTO'
                    onPress={() => navigation.navigate('RegisterRemedie')}
                    marginTop={6}
                    marginBottom={2}
                />
                <Button
                    typeButton='primary'
                    textButton='EXCLUIR PERFIL'
                    onPress={() => setIsOpen(true)}
                    marginTop={2}
                />
            </S.ContainerButton>
            {
                isOpen && (
                    <ModalDelete
                        onPress={() => (deletePatient(), setIsOpen(false))}
                        description='Deseja excluir este perfil?'
                        closeModal={() => setIsOpen(false)}
                    />
                )
            }
        </S.ContainerPage >
    )
}