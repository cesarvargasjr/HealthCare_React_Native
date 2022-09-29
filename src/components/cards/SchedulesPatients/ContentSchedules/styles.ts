import styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const ContainerInfo = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const TextBold = styled.Text.attrs({ numberOfLines: 1 })`
    flex: 1;
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_700Bold';
    line-height: 26px;
    margin-left: 6px;
    max-width: 70%;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.lightGreen};
    font-family: 'Nunito_700Bold';
`;

export const ContainerDescription = styled.View`
    flex-direction: row;
`;

export const ContentPatient = styled.View`
    flex-direction: row;
    align-items: center;
`;