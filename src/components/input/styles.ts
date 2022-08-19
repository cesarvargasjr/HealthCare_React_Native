import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerInput = styled.View`
    width: 100%;
    height: 40px;
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