import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    border-radius: 10px;
    padding: 5%;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.purpleDark};
    width: 40%;

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 5;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.white};
    font-family: 'Nunito_600SemiBold';
    text-align: center;
    line-height: 27px;
`;