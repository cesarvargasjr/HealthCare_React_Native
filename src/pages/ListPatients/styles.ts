import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.View`
    background-color: ${colors.ghostwhite};
    height: 100%;
`;

export const ContainerCards = styled.ScrollView`
    max-height: 85%;
    padding: 0 4%;
`;

export const ContainerTabBar = styled.View`
    position: absolute;
    bottom: 0;
`;
