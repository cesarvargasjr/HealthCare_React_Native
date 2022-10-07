import styled from 'styled-components/native';
import colors from '../../utils/colors';
import * as Animation from 'react-native-animatable'

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 15% 0;
`;

export const Title = styled(Animation.Text)`
    font-size: 38px;
    font-family: 'Nunito_800ExtraBold';
    color: ${colors.purple};
`;

export const ContainerButton = styled.View`
    padding: 0 7%;
    width: 100%;
    margin-top: 15%;
    align-items: center;
`;