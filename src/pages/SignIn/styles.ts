import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.ScrollView.attrs({contentContainerStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' }})`
    background-color: ${colors.white};
    padding: 7%;
`;

export const ContainerLogin = styled.View`
    justify-content: flex-start;
    width: 100%;
    margin-top: 10%;
`;