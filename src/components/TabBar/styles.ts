import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerTab = styled.View`
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.purple};
    /* border-radius: 50px; */
    height: 75px;
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
`;

export const Text = styled.Text`
    font-size: 12px;
    color: ${colors.white};
    font-family: 'Nunito_400Regular';
`;
