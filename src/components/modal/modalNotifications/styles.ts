import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerPage = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Backgroud = styled.View`
    display: flex;
    background-color: ${colors.black}44;
    height: 100%;
    width: 100%;
`;

export const ContainerModal = styled.View`
    position: absolute;
    width: 80%;
    border-radius: 8px;
    background-color: ${colors.white};
    align-items: center;
    padding: 9% 4%;
`;

export const Description = styled.Text`
    font-size: 21px;
    width: 95%;
    text-align: center;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
`;