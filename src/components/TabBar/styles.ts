import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerTab = styled.View`
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.purple};
    border-top-left-radius:40px;
    border-top-right-radius:40px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    height: 65px;
    width: 100%;
    flex-direction: row;

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 5;
`;

export const ContainerIcon = styled.TouchableOpacity`
    align-items: center;
    width: 24%;
`;

export const ContainerIconAdd = styled.TouchableOpacity`
    position: relative;
    align-items: center;
    width: 24%;
    bottom: 5%;
`;

export const Text = styled.Text`
    font-size: 12px;
    color: ${colors.white};
    font-family: 'Nunito_400Regular';
    margin-top: 3%;
    margin-bottom: 5%;
    text-align: center;
`;
