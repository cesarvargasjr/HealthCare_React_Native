import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;

export const ContainerContent = styled.ScrollView`
    padding: 0 3%;
    max-height: 89%;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
`;

export const TextCheck = styled.Text`
    font-size: 18px;
    color: ${colors.lightGreen};
    font-family: 'Nunito_700Bold';
`;

export const TextPending = styled.Text`
    font-size: 18px;
    color: ${colors.orange};
    font-family: 'Nunito_700Bold';
`;

export const TextListEmpity = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${colors.black};
    font-family: 'Nunito_600SemiBold';
    max-width: 90%;
    margin-top: 15%;
`;

export const TextLoading = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${colors.purpleDark};
    font-family: 'Nunito_600SemiBold';
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
`;

export const TextTime = styled.Text`
    font-size: 16px;
    color: ${colors.red};
    font-family: 'Nunito_700Bold';
    margin-left: 1px;
`;

export const TextDrug = styled.Text`
    font-size: 16px;
    color: ${colors.purple};
    font-family: 'Nunito_700Bold';
    margin-top: 5%;
`;

export const ContainerSchedule = styled.View`
    padding: 5%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerInfo = styled.View`
    justify-content: center;
    width: 60%;
    max-width: 60%;
`;

export const ContainerInLine = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ContainerInLineCheck = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 17%;
`;

export const ListPatientsEmpty = styled.View`
    align-items: center;
    margin-top: 30%;
`;

export const ContainerDescription = styled.View`
    margin-top: 12px;
`;

export const ContainerInstructions = styled.View`
    width: 37%;
    justify-content: space-evenly;
`;

export const ContainerCheckbox = styled.View`
    margin-top: 1%;
    margin-right: 3%;
`;
