import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border: 2px solid ${colors.purple};
    border-radius: 8px;
    height: 72px;
    width: 72px;
`;

export const IconAdd = styled.Text`
    color: ${colors.purple};
    font-family: 'Nunito_800ExtraBold';
    font-size: 45px;
`;