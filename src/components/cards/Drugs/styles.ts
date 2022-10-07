import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    width: 95%;
    border-radius: 10px;
    margin-left: 2%;
    padding: 5%;
    margin-top: 2%;
    margin-bottom: 4%;
    background-color: ${colors.white};

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 5;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 2%;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 5%;
`;

export const TextBold = styled.Text`
    font-size: 14px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    margin-bottom: 3px;
`;

export const TextExpired = styled.Text`
    font-size: 14px;
    color: ${colors.purple};
    font-family: 'Nunito_400Regular';
`;

export const TextHour = styled.Text`
    font-size: 14px;
    color: ${colors.lightGreen};
    font-family: 'Nunito_700Bold';
`;

export const ContainerHour = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const ContainerDelete = styled.TouchableOpacity`

`;

export const Text = styled.Text`
    font-size: 14px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
    line-height: 20px;
`;

export const TextDateInitial = styled.Text`
    font-size: 14px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
    line-height: 20px;
`;

export const Title = styled.Text`
    font-size: 19px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
`;