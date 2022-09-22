import styled from 'styled-components/native';
import colors from '../../utils/colors';

interface LineProps {
    marginTop?: number; 
    marginBottom?: number; 
}

export const Line = styled.View<LineProps>`
    height: 2px;
    background-color: ${colors.light};
    border: 1px solid ${colors.light};
    margin-top: ${({ marginTop }) => marginTop ?? 0}%;
    margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}%;
`;