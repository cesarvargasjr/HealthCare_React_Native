import React from 'react';
import { Line } from '../../components/Line';
import { TabBar } from '../../components/TabBar';
import { usePatient } from '../../contexts/Patient';
import { SvgCss } from 'react-native-svg';
import listEmpity from '../../assets/listEmpity.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

export const AllSchedules = () => {

    const { listPatients } = usePatient();
    const quantityDrugs = 1;

    const RenderSchedules = () => {
        if (listPatients?.length > 0) {
            return (
                listPatients?.map(({ namePatient }) => (
                    <>
                        <S.ContainerSchedule>
                            <S.ContainerInfo>
                                <S.Title>Paciente</S.Title>
                                <S.Text>{namePatient}</S.Text>
                                <S.ContainerDescription>
                                    <S.Title>Medicamento</S.Title>
                                    <S.Text>Losartana</S.Text>
                                </S.ContainerDescription>
                            </S.ContainerInfo>
                            <S.ContainerInstructions>
                                <S.ContainerInLine>
                                    <Icon name="clock-o" size={22} color="#51d17e" />
                                    <S.TextTime>09:15</S.TextTime>
                                </S.ContainerInLine>
                                {quantityDrugs === 1 ? (
                                    <S.TextDrug>{quantityDrugs} Comprimido</S.TextDrug>
                                ) : (
                                    <S.TextDrug>{quantityDrugs} Comprimidos</S.TextDrug>
                                )}
                            </S.ContainerInstructions>
                        </S.ContainerSchedule>
                        <Line />
                    </>
                ))
            )
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
    }

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