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
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_400regular';
`;

export const TextListEmpity = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${colors.black};
    font-family: 'Nunito_600SemiBold';
    max-width: 90%;
    margin-top: 15%;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
`;

export const TextTime = styled.Text`
    font-size: 16px;
    color: ${colors.green};
    font-family: 'Nunito_700Bold';
    margin-left: 4px;
`;

export const ContainerSchedule = styled.View`
    padding: 6% 8%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerInfo = styled.View`
    justify-content: center;
    max-width: 75%;
`;

export const ContainerTime = styled.View`
    flex-direction: row;
`;

export const ListPatientsEmpty = styled.View`
    align-items: center;
    margin-top: 30%;
`;

export const ContainerDescription = styled.View`
    margin-top: 12px;
`;