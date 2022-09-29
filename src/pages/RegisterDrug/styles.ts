import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ContainerPage = styled.ScrollView`
    background-color: ${colors.white};
    padding: 7%;
`;

export const ContainerButton = styled.View`
    align-items: center;
    margin-bottom: 20%;
`;

export const ContainerButtonDateTime = styled.View`
    align-items: center;
    width: 50%;
`;

export const ContainerInfoDateTime = styled.TouchableOpacity`
    height: 40px;
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    margin-left: 1%;
    border-radius: 8px;
    background-color: ${colors.purpleInput};

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.5;
    shadow-radius: 3px;
    elevation: 3;
`;

export const TextDateTime = styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-family: 'Nunito_600SemiBold';
    text-align: center;
`;

export const TitleTouchDateTime = styled.Text`
    font-size: 16px;
    font-family: 'Nunito_700Bold';
    color: ${colors.black};
    margin-bottom: 7px;
`;
