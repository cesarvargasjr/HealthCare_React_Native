import styled from 'styled-components/native';
import colors from '../../utils/colors';
import * as Animation from 'react-native-animatable'

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    min-height: 100%;
    align-items: center;
    padding: 7%;
`;

export const Title = styled(Animation.Text)`
    font-size: 46px;
    font-family: 'Nunito_800ExtraBold';
    color: ${colors.purple};
    margin-top: 20%;
`;

export const TextButton = styled.Text`
    color: ${colors.white};
    font-family: 'Nunito_700Bold';
`;

export const ContainerButton = styled.TouchableOpacity`
    width: 80%;
    background-color: ${colors.purple};
    border-radius: 50px;
    margin-top: 30%;
    align-items: center;
    justify-content: center;
    height: 40px;
`;