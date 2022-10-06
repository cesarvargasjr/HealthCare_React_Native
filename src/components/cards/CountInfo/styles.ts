import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.TouchableOpacity`
    border-radius: 10px;
    padding: 10% 4%;
    align-items: center;
    background-color: ${colors.purple};
    width: 40%;

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 5;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.white};
    font-family: 'Nunito_400Regular';
    text-align: center;
    line-height: 27px;
    margin-top: 5%;
`;

export const Number = styled.Text`
    font-size: 21px;
    color: ${colors.white};
    font-family: 'Nunito_400Regular';
    text-align: center;
    margin-top: 15%;
`;
