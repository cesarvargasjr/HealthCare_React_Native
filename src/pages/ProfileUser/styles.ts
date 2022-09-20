import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerContent = styled.View`
    align-items: center;
    height: 100%;
    padding: 7%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;

export const Text = styled.Text`
    font-size: 40px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
    text-align: center;
`;
