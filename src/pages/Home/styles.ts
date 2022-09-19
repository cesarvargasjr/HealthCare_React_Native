import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerContent = styled.View`
    padding: 5%;
    align-items: center;
`;

export const TextBold = styled.Text`
    font-size: 21px;
    color: ${colors.purple};
    font-family: 'Nunito_700Bold';
    line-height: 26px;
    margin-bottom: 3%;
    text-align: left;
`;

export const ContainerDays = styled.View`
    flex-direction: row;
    margin-top: 3%;
    margin-bottom: 8%;
    justify-content: space-evenly;
    width: 100%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;

export const ContainerText = styled.View`
    width: 100%;
`;

export const ContainerSlider = styled.ScrollView`
    max-height: 30%;
    flex: 1;
    width: 100%;
    border: 1px solid red;
    /* flex-direction: row; */
`;