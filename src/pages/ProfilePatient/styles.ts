import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerContent = styled.View`
    background-color: ${colors.ghostwhite};
    padding: 1% 7%;
    height: 100%;
`;

export const ContainerProfile = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    min-height: 18%;
    max-height: 25%;
    padding: 0 3%;
    margin-top: 2%;
    justify-content: space-evenly;
`;

export const ContainerInfo = styled.View`
    flex-direction: column;
    width: 77%;
`;

export const NameProfile = styled.Text`
    font-size: 21px;
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
    padding: 2% 5%;
`;

export const ContainerButton = styled.View`
    align-items: center;
    width: 100%;
    /* padding: 0 20%; */
`;

export const ContainerButtonProfile = styled.View`
    align-items: center;
`;

export const ContainerIcon = styled.TouchableOpacity`

`;

export const ContainerIcons = styled.View`
    height: 70%;
    justify-content: space-evenly;
    margin-left: 10%;
`;

export const ListDrugsEmpty = styled.View`
    align-items: center;
    margin-top: 30%;
`;

export const TextListEmpty = styled.Text`
    font-size: 19px;
    text-align: center;
    color: ${colors.black};
    font-family: 'Nunito_600SemiBold';
    max-width: 90%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;