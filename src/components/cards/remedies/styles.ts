import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    width: 100%;
    border-radius: 8px;
    padding: 5%;
    border: 2px solid ${colors.purple};
    margin-bottom: 5%;
    justify-content: space-between;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

export const TextBold = styled.Text`
    font-size: 15px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    margin-bottom: 6px;
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

export const ContainerDelete = styled.TouchableOpacity`

`;

export const Text = styled.Text`
    font-size: 15px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
    line-height: 20px;
`;

export const Title = styled.Text`
    font-size: 21px;
    color: ${colors.black};
    font-family: 'Nunito_800ExtraBold';
    margin-bottom: 12px;
`;