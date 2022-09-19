import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    width: 100%;
    border-radius: 15px;
    border: 0.3px solid ${colors.purple};
    padding: 5%;
    margin-bottom: 5%;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.white};


    /* border-width: 0.5; */
    /* border-radius: 8; */
    /* border-color: #ddd; */
    /* border-bottom-width: 1; */

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 1;
`;

export const ContainerInfo = styled.View`
    flex-direction: column;
    width: 75%;
`;

export const TextBold = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    line-height: 26px;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
`;

export const ContainerDescription = styled.View`
    flex-direction: row;
`;