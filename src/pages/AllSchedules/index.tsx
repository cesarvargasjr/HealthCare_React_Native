import React, { useMemo, useState } from 'react';
import { Line } from '../../components/Line';
import { TabBar } from '../../components/TabBar';
import { SvgCss } from 'react-native-svg';
import { handleListAllDrugs } from '../../services/Drugs/ListDrug';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/Auth';
import Checkbox from 'expo-checkbox';
import listEmpity from '../../assets/listEmpity.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import * as S from './styles';

export const AllSchedules = () => {

    const [listDrugs, setListDrugs]: any = useState();
    const [isChecked, setChecked] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    function handleSelected(i: any) {
        setChecked(isChecked.map((item: any, index: any) => index === i ? !item : item));
    };

    useMemo(async () => {
        setLoading(true)
        const response: any = await handleListAllDrugs(user);
        setChecked(response.map(item => false))
        setListDrugs(response.sort((a, b) => a.timeNotification > b.timeNotification ? 1 : -1));
        setLoading(false)
    }, []);

    const RenderSchedules = () => {
        if (listDrugs?.length > 0) {
            return (
                listDrugs.map(({ quantityDrugs, name, namePatient, timeNotification }, index: number) => {
                    return (

                        <>
                            <S.ContainerSchedule key={index}>
                                <S.ContainerCheckbox>
                                    <Checkbox
                                        value={isChecked[index]}
                                        color={isChecked[index] ? colors.purple : colors.purple}
                                        onValueChange={() => handleSelected(index)}
                                        style={{
                                            borderRadius: 50,
                                        }}
                                    />
                                </S.ContainerCheckbox>
                                <S.ContainerInfo>
                                    <S.Title>Paciente</S.Title>
                                    <S.Text>{namePatient}</S.Text>
                                    <S.ContainerDescription>
                                        <S.Title>Medicamento</S.Title>
                                        <S.Text>{name}</S.Text>
                                    </S.ContainerDescription>
                                </S.ContainerInfo>
                                <S.ContainerInstructions>
                                    <S.ContainerInLine>
                                        <Icon name="clock-o" size={22} color={colors.red} />
                                        <S.TextTime>{timeNotification}</S.TextTime>
                                    </S.ContainerInLine>
                                    {quantityDrugs > 1 ? (
                                        <S.TextDrug>{quantityDrugs} Comprimidos</S.TextDrug>
                                    ) : (
                                        <S.TextDrug>{quantityDrugs} Comprimido</S.TextDrug>
                                    )}
                                    {isChecked[index] ? (
                                        <S.ContainerInLineCheck>
                                            <Icon name="check" size={22} color={colors.lightGreen} />
                                            <S.TextCheck> Realizado</S.TextCheck>
                                        </S.ContainerInLineCheck>
                                    ) : (
                                        <S.ContainerInLineCheck>
                                            <Icon name="warning" size={20} color={colors.orange} />
                                            <S.TextPending> Pendente</S.TextPending>
                                        </S.ContainerInLineCheck>
                                    )}
                                </S.ContainerInstructions>
                            </S.ContainerSchedule>
                            <Line />
                        </>

                    )
                })
            )
        } else {
            return (
                <>
                    {loading ? (
                        <>
                            <ActivityIndicator size="large" color="#888BF0" style={{ marginTop: '60%' }} />
                            <S.TextLoading>
                                Carregando...
                            </S.TextLoading>
                        </>
                    ) : (
                        <>
                            <S.ListPatientsEmpty>
                                <SvgCss xml={listEmpity} height={250} width={250} />
                                <S.TextListEmpity>
                                    Você não possui atendimentos no momento
                                </S.TextListEmpity>
                            </S.ListPatientsEmpty>
                        </>
                    )}
                </>
            )
        }
    };

    return (
        <S.ContainerPage>
            <S.ContainerContent>
                {RenderSchedules()}
            </S.ContainerContent>
            <S.ContainerTabBar>
                <TabBar />
            </S.ContainerTabBar>
        </S.ContainerPage>
    )
}
