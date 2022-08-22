import styled from 'styled-components/native';
import colors from '../../utils/colors';

interface InputProps {
    height?: number;
}

export const ContainerInput = styled.View<InputProps>`
    width: 100%;
    /* height: 40px; */
    height: ${({ height }) => height ?? 40}px;
    margin-top: 7px;
    margin-bottom: 25px;
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