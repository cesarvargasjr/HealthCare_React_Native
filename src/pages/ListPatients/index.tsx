import React, { useMemo, useState } from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { CardPatient } from '../../components/cards/patient';
import { Button } from '../../components/button';
import { Line } from '../../components/line';
import { firebaseConfig } from '../../../firebase-config';
import { initializeApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { ModalNotifications } from '../../components/modal/modalNotifications';

export const ListPatients = () => {

    const navigation: any = useNavigation();

    /**************** LISTAGEM DOS PACIENTES/IDOSOS - FIREBASE ****************/

    // FUNÇÃO PARA LISTAGEM TOTAL DA COLLETCION: 

    // const [listPatients, setListPatients]: any = useState([]);
    // const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);

    // const handleListPatients = async () => {

    //     const data = query(collection(db, "registerPatients"));

    //     const querySnapshot: any = await getDocs(data);
    //     querySnapshot.forEach((doc: any) => {
    //         setListPatients((state: any) => [...state, doc.data()])
    //     });
    // }

    // useMemo(() => {
    //     handleListPatients()
    // }, [])

    const [listPatients, setListPatients]: any = useState([]);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const users = collection(db, 'registerUsers')
    const idUser = 'Nrp6YKEIUHOg2zu1XgSD';

    const handleListPatients = async () => {

        function getDocRef(idRef, collection) {
            return doc(db, collection.path, idRef)
        }

        const data = query(collection(db, "registerPatients"), where('user', '==', getDocRef(idUser, users)));

        const querySnapshot: any = await getDocs(data);
        querySnapshot.forEach((doc: any) => {
            setListPatients((state: any) => [...state, doc.data()])
        });
    }

    useMemo(() => {
        handleListPatients()
    }, [])

    /**************************************************************************/

    return (
        <S.ContainerPage>
            <S.ContainerCards showsVerticalScrollIndicator={false} >
                {/**************** VALIDAR REGRA PARA EXIBIR MODAL ****************/}
                {listPatients ? (
                    <>
                        {listPatients?.map(({ name, age }, index) => (
                            <CardPatient
                                namePatient={name}
                                agePatient={age}
                                key={index}
                            />
                        ))}
                    </>
                ) : (
                    <ModalNotifications
                        description='Você não possui pacientes. Deseja cadastrar um paciente agora?'
                        navigate={() => navigation.navigate('RegisterPatient')}
                    />
                )}
            </S.ContainerCards>
            <Line
                marginTop={10}
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='VOLTAR'
                    onPress={() => navigation.navigate('Home')}
                    marginTop={8}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}