import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    padding: 7%;
    align-items: center;
`;

export const ContainerLogin = styled.View`
    justify-content: flex-start;
    width: 100%;
    margin-top: 3%;
`;

export const TextButtonNewUser = styled.Text`
    color: ${colors.purple};
    font-size: 14px;
    font-family: 'Nunito_800ExtraBold';
    text-align: center;
    line-height: 25px;
`;
