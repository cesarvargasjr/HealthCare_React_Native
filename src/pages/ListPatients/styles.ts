import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerCards = styled.ScrollView`
    height: 88%;
    min-height: 88%;
    max-height: 88%;
    padding: 3% 4%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;

export const ListPatientsEmpty = styled.View`
    align-items: center;
    justify-content: space-evenly;
    height: 88%;
`;

export const Text = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${colors.black};
    font-family: 'Nunito_600SemiBold';
    max-width: 65%;
`;