import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.white};
    height: 100%;
    padding: 7%;
`;

export const ContainerCards = styled.ScrollView`
    max-height: 80%;
`;

export const ContainerButton = styled.View`
    align-items: center;
`;