import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    padding: 7%;
    height: 100%;
`;

export const ContainerProfile = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    height: 18%;
`;

export const ContainerInfo = styled.View`
    flex-direction: column;
`;

export const NameProfile = styled.Text`
    font-size: 18px;
    color: ${colors.black};
    font-family: 'Nunito_800ExtraBold';
    margin-bottom: 5px;
`;

export const TextBold = styled.Text`
    font-size: 14px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    margin-bottom: 5px;
`;

export const Text = styled.Text`
    font-size: 14px;
    color: ${colors.black};
    font-family: 'Nunito_400Regular';
`;

export const ContainerCards = styled.ScrollView`
    height: 90px;
    padding: 0 5%;
`;

export const ContainerButton = styled.View`
    align-items: center;
`;
