import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    width: 100%;
    border-radius: 10px;
    padding: 10% 4%;
    /* align-items: center; */
    /* justify-content: space-between; */
    background-color: ${colors.white};

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 4;
`;

export const ContainerInfo = styled.View`
    flex-direction: column;
    width: 100%;
    margin-top: 4%;
`;

export const TextBold = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    line-height: 26px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    text-align: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
`;