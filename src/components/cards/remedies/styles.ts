import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    padding: 5%;
    border: 2px solid ${colors.purple};
    margin-bottom: 5%;
    justify-content: space-between;
`;

export const ContainerLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const TextBold = styled.Text`
    font-size: 15px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    margin-bottom: 5px;
`;

export const TextDays = styled.Text`
    font-size: 15px;
    color: ${colors.purple};
    font-family: 'Nunito_700Bold';
    margin-bottom: 5px;
`;

export const TextHour = styled.Text`
    font-size: 15px;
    color: ${colors.green};
    font-family: 'Nunito_700Bold';
    margin-bottom: 5px;
`;

export const ContainerTimer = styled.View`
    flex-direction: row;
`;