import styled from 'styled-components/native';
import colors from '../../utils/colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animation from 'react-native-animatable'

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    min-height: 100%;
    align-items: center;
    padding: 7%;
`;

// export const ContainerPage = styled(LinearGradient).attrs({ colors: [ '#29ABE2', '#373AAD' ] })`
//     background-color: LinearGradient;
//     background-color: ${colors.white};
//     min-height: 100%;
//     align-items: center;
//     padding: 7%;
// `;

export const Title = styled(Animation.Text)`
    font-size: 46px;
    font-family: 'Nunito_800ExtraBold';
    color: ${colors.purple};
    margin-top: 20%;
`;