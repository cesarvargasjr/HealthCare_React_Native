import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerPage = styled.ScrollView`
    background-color: ${colors.white};
    padding: 7%;
`;

export const ContainerButton = styled.View`
    align-items: center;
`;

export const TitleCard = styled.Text`
    font-size: 18px;
    font-family: 'Nunito_700Bold';
    color: ${colors.black};
    margin-bottom: 7px;
`;