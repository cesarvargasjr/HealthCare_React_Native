import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
    display: flex;
`;

export const Background = styled.View`
    background-color: ${colors.purple};
    height: 45%;
    border-bottom-left-radius: 30px; 
    border-bottom-right-radius: 30px; 
`;

export const ContainerContent = styled.View`
    padding: 5%;
    align-items: center;
    justify-content: space-evenly;
    height: 90%;
`;

export const TextBold = styled.Text`
    font-size: 21px;
    color: ${colors.purple};
    font-family: 'Nunito_700Bold';
    line-height: 26px;
    margin-bottom: 3%;
    text-align: left;
`;

export const TextDateNow = styled.Text`
    font-size: 16px;
    color: ${colors.grey};
    font-family: 'Nunito_700Bold';
    margin-left: 2%;
`;

export const ContainerDays = styled.View`
    flex-direction: row;
    margin-top: 3%;
    margin-bottom: 8%;
    justify-content: space-evenly;
    width: 100%;
`;

export const ContainerDateNow = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-bottom: 5%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;

export const ContainerText = styled.View`
    width: 100%;
    margin-top: 15%;
`;

export const ContainerButton = styled.View`
    width: 100%;
    align-items: flex-end;
`;

export const ContainerCards = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const ContainerAddPatient = styled.View`
    position: absolute;
    width: 100%;
    align-items: center;
    bottom: 5;
    
`;