import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { SchedulesPatients } from '../../components/Cards/SchedulesPatients';
import { TabBar } from '../../components/TabBar';
import { SliderHome } from '../../components/SliderHome';
import { Button } from '../../components/Button';
import * as S from './styles'

// const slider = [
//     {
//         key: '1',
//         image: require('../../assets/indoorBike.png'),
//         title: 'Exercício físico e seus benefícios, qual o seu impacto no dia a dia...',
//         textButton: 'Quero saber mais',
//         link: 'BUTTON ATIVIDADE FÍSICA'
//     },
//     {
//         key: '2',
//         image: require('../../assets/breakfast.png'),
//         title: 'A importância de uma alimentação saudável...',
//         textButton: 'Quero saber mais',
//         link: 'BUTTON ALIMENTAÇÃO'
//     },
//     {
//         key: '3',
//         image: require('../../assets/drugs.png'),
//         title: 'Medicamento na hora certa, por que é tão importante...',
//         textButton: 'Quero saber mais',
//         link: 'BUTTON MEDICAMENTO NA HORA CERTA'
//     },
// ];

const slider = [
    {
        key: '1',
        image: require('../../assets/welcome.png'),
        description: 'Com o Health Care você poderá fazer o gerenciamento de seus pacientes, medicamentos e atendimentos.',
    },
    {
        key: '2',
        image: require('../../assets/registerPatients.png'),
        description: 'Cadastre seus pacientes e comece a gerenciar sua clínica.',
    },
    {
        key: '3',
        image: require('../../assets/drugs.png'),
        description: 'Após ter pacientes cadastrados insira os seus respectivos medicamentos para gerenciar os atendimentos.',
    },
];

export const Home = () => {

    const navigation: any = useNavigation();
    // const [selected, setSelected] = useState(1);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (
        <S.ContainerPage>
            <S.ContainerContent>
                {/* >>>>>> FILTRO DE AGENDAMENTOS CONFORME O DIA <<<<<<
                <S.ContainerDays>
                    {['Ontem', 'Hoje', 'Amanhã'].map((item, index) => (
                        <CardDays selected={selected} textDay={item} id={index} onPress={setSelected} key={index} />
                    ))}
                </S.ContainerDays> */}
                <S.ContainerText>
                    <S.TextBold>Próximos atendimentos...</S.TextBold>
                </S.ContainerText>
                <SchedulesPatients />
                <S.ContainerButton>
                    <Button
                        typeButton='secondary'
                        textButton='Ver todos'
                        onPress={() => navigation.navigate('AllSchedules')}
                        width={25}
                        marginTop={1}
                        marginBottom={7}
                    />
                </S.ContainerButton>
                <SliderHome slider={slider} />
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}