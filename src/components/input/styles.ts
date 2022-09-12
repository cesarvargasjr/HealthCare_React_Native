import { Text } from '../Cards/Drugs/styles';
import styled from 'styled-components/native';
import colors from '../../utils/colors';

interface InputProps {
    height?: number;
}

export const ContainerInput = styled.View<InputProps>`
    width: 100%;
    height: ${({ height }) => height ?? 40}px;
    margin-top: 7px;
    /* margin-bottom: 20px; */
    padding-left: 10px;
    background-color: ${colors.purpleInput};
    justify-content: center;
    border-radius: 8px;
`;

export const TitleInput = styled.Text`
    font-size: 18px;
    font-family: 'Nunito_700Bold';
    color: ${colors.black};
`;

export const MessageError = styled.Text<{marginBottom: any}>`
    font-size: 14px;
    font-family: 'Nunito_400Regular';
    color: ${colors.red};
    margin-bottom: 10px;
`;