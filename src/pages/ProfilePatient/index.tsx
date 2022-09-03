import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Button } from '../../components/button';
import { CardRemedies } from '../../components/cards/remedies';
import { Line } from '../../components/line';
import * as S from './styles';
import { useToast } from 'react-native-toast-notifications';
import { ModalDelete } from '../../components/modal/modalDelete';
import { collection, deleteDoc, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';

export const ProfilePatient = () => {

    const navigation: any = useNavigation();
    const [isOpen, setIsOpen] = useState(false);

    /************* GET PARA VISUALIZAR PERFIL DO PACIENTE - FIREBASE *************/
    // const getPatient = async (idRef: any) => {
    //     const app = initializeApp(firebaseConfig);
    //     const db = getFirestore(app);
    //     const collectionEntity = collection(db, "/registerPatients")

    //     try {
    //         return (await getDoc(doc(db, collectionEntity.path, idRef))).data()
    //     } catch (err) {
    //         console.error(`Erro ao obter os dados ${"registerPatients"}`, err);
    //     }
    // }

    //     const repository = collection(db, "registerPatients")
    //     repository.getPatient()('3g8QKgUp5m8OIgWdRrjQ')
    //         .then(res => console.log(res))
    // }

    // useEffect(() => {
    //     console.log(getPatient("3g8QKgUp5m8OIgWdRrjQ"))
    // }, []);

    /*****************************************************************************/

    /******** LISTAGEM / EXCLUSÃO DOS MEDICAMENTOS DO PACIENTE - FIREBASE ********/
    const [listDrugs, setListDrugs]: any = useState([]);
    const toast = useToast();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionDrugs = collection(db, 'registerDrugs');
    const idPatient = '3g8QKgUp5m8OIgWdRrjQ';
    const idPatientDelete = 'suSNdS2Q782uv7tlFEEU';
    const idUser = 'Nrp6YKEIUHOg2zu1XgSD';
    const collectionUser = 'registerUser';
    const collectionPatients = 'registerPatient';


    function getDocRef(idRef, collection) {
        return doc(db, collection.path, idRef)
    }


    // LISTAGEM DOS MEDICAMENTOS
    const handleListDrugs = async () => {

        const data = query(collection(db, "registerDrugs"), where('user', '==', getDocRef(idPatient, collectionDrugs)));

        const querySnapshot: any = await getDocs(data);
        querySnapshot.forEach((doc: any) => {
            setListDrugs((state: any) => [...state, doc.data()])
        });
    }


    // DELETE DE PACIENTE
    const handleDeletePatient = () => {

        // { user: getDocRef(idUser, collectionUser) }
        const docRef = doc(db, collectionPatients, idPatientDelete);

        deleteDoc(docRef)
            .then(() => {
                toast.show('Paciente excluído com sucesso', {
                    type: 'success',
                });
            })
            .catch((error) => {
                console.log(error)
                toast.show('Não foi possivel excluir o paciente, tente novamente', {
                    type: 'error'
                });
            })
    }


    useMemo(() => {
        handleListDrugs()
    }, [])

    /******************************************************************************/

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
                    <CardRemedies
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
                        onPress={() => (handleDeletePatient(), setIsOpen(false))}
                        description='Deseja excluir este perfil?'
                        closeModal={() => setIsOpen(false)}
                    />
                )
            }
        </S.ContainerPage >
    )
}