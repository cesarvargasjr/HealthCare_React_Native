import styled from 'styled-components/native';
import colors from '../../utils/colors';

interface ButtonProps {
    marginTop?: number; 
    marginBottom?: number; 
}

export const ContainerButton = styled.TouchableOpacity<ButtonProps>`
    width: 80%;
    background-color: ${colors.purple};
    border-radius: 50px;
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

export const TextButton = styled.Text`
    color: ${colors.white};
    font-family: 'Nunito_700Bold';
`;

export const ContainerButtonNewUser = styled.TouchableOpacity<ButtonProps>`
    width: 60%;
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
`;

export const TextButtonNewUser = styled.Text`
    color: ${colors.purple};
    font-size: 14px;
    font-family: 'Nunito_800ExtraBold';
    text-align: center;
    line-height: 25px;
`;
