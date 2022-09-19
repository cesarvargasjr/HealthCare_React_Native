import styled from 'styled-components/native';
import colors from '../../utils/colors';

interface ButtonProps {
    marginTop?: number; 
    marginBottom?: number;
    width?: number; 
}

export const ContainerButton = styled.TouchableOpacity<ButtonProps>`
    width: 80%;
    background-color: ${colors.purple};
    border-radius: 8px;
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

export const TextButton = styled.Text`
    color: ${colors.white};
    font-family: 'Nunito_600SemiBold';
    font-size: 15px;
`;

export const ContainerButtonJustText = styled.TouchableOpacity<ButtonProps>`
    width: ${({ width }) => width ?? 60}%;
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
`;

export const TextButtonJustText = styled.Text`
    color: ${colors.purple};
    font-size: 15px;
    font-family: 'Nunito_800ExtraBold';
    text-align: center;
    line-height: 25px;
`;

export const ContainerButtonTertiary = styled.TouchableOpacity<ButtonProps>`
    width: 80%;
    border-radius: 8px;
    border: 2px solid ${colors.purple};
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

export const TextButtonTertiary = styled.Text`
    color: ${colors.purple};
    font-family: 'Nunito_600SemiBold';
    font-size: 15px;
`;

export const ContainerButtonCancel = styled.TouchableOpacity<ButtonProps>`
    width: 80%;
    border-radius: 8px;
    border: 2px solid ${colors.lightRed};
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

export const TextButtonCancel = styled.Text`
    color: ${colors.lightRed};
    font-family: 'Nunito_600SemiBold';
    font-size: 15px;
`;