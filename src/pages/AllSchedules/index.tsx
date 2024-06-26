import React, { useMemo, useState } from 'react';
import { Line } from '../../components/line';
import { TabBar } from '../../components/TabBar';
import { SvgCss } from 'react-native-svg';
import { handleListAllDrugs } from '../../services/drugs/listDrug';
import { useAuth } from '../../contexts/Auth';
import listEmpity from '../../assets/listEmpity.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import * as S from './styles';

export const AllSchedules = () => {

    const [listDrugs, setListDrugs]: any = useState();
    const { user } = useAuth();

    useMemo(async () => {
        const response: any = await handleListAllDrugs(user);
        setListDrugs(response.sort((a, b) => a.timeNotification > b.timeNotification ? 1 : -1));
    }, []);

    const RenderSchedules = () => {
        if (listDrugs?.length > 0) {
            return (
                listDrugs.map(({ quantityDrugs, name, namePatient, timeNotification }, key) => {
                    return (
                        <>
                            <S.ContainerSchedule key={key}>
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
                                        <Icon name="clock-o" size={22} color={colors.lightRed} />
                                        <S.TextTime>{timeNotification}</S.TextTime>
                                    </S.ContainerInLine>
                                    {quantityDrugs > 1 ? (
                                        <S.TextDrug>{quantityDrugs} Comprimidos</S.TextDrug>
                                    ) : (
                                        <S.TextDrug>{quantityDrugs} Comprimido</S.TextDrug>
                                    )}
                                </S.ContainerInstructions>
                            </S.ContainerSchedule>
                            <Line />
                        </>
                    )
                }))
        } else {
            return (
                <S.ListPatientsEmpty>
                    <SvgCss xml={listEmpity} height={250} width={250} />
                    <S.TextListEmpity>
                        Você não possui atendimentos no momento
                    </S.TextListEmpity>
                </S.ListPatientsEmpty>
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
