import styled from 'styled-components/native';
import colors from '../../utils/colors';
import * as Animation from 'react-native-animatable'

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    min-height: 100%;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 3%;
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
    text-align: center;
    background-color: ${colors.purple};
    border-radius: 50px;
    padding: 10px;
    margin-top: 40%;
`;

export const ContainerButton = styled(Animation.View)`
    width: 60%;
`;