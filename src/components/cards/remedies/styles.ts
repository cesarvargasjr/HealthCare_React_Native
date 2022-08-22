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

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 3%;
`;

export const TextBold = styled.Text`
    font-size: 15px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    margin-bottom: 3px;
`;

export const TextExpired = styled.Text`
    font-size: 15px;
    color: ${colors.purple};
    font-family: 'Nunito_700Bold';
`;

export const TextHour = styled.Text`
    font-size: 16px;
    color: ${colors.green};
    font-family: 'Nunito_800ExtraBold';
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
    font-size: 22px;
    color: ${colors.black};
    font-family: 'Nunito_800ExtraBold';
`;