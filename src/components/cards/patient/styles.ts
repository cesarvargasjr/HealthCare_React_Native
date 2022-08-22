import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.TouchableOpacity`
    width: 100%;
    border-radius: 8px;
    padding: 5%;
    border: 2px solid ${colors.purple};
    margin-bottom: 5%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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