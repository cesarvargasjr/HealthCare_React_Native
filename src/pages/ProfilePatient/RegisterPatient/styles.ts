import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerContent = styled.ScrollView`
    background-color: ${colors.white};
    padding: 7%;
    /* max-height: 90%; */
`;

export const ContainerButton = styled.View`
    align-items: center;
`;

export const TitleCard = styled.Text`
    font-size: 18px;
    font-family: 'Nunito_700Bold';
    color: ${colors.black};
    margin-bottom: 7px;
`;

export const ContainerAddImage = styled.View`
    width: 100%;
    padding-left: 1%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;