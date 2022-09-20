import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.TouchableOpacity<{ id: number; selected: number }>`
    align-items: center;
    justify-content: center;
    background-color: ${({id, selected}) => id === selected ? colors.purple : colors.white};
    border: 1px solid ${colors.purple};
    border-radius: 4px;
    height: 35px;
    width: 80px;
`;

export const Text = styled.Text<{ id: number; selected: number }>`
    font-size: 14px;
    color: ${({id, selected}) => id === selected ? colors.white : colors.purple};;
    font-family: 'Nunito_700Bold';
`;