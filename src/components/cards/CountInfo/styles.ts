import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.TouchableOpacity`
    border-radius: 10px;
    padding: 7% 4%;
    align-items: center;
    background-color: ${colors.white};
    width: 40%;

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 5;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.purple};
    font-family: 'Nunito_400Regular';
    text-align: center;
    line-height: 27px;
    margin-top: 5%;
`;

export const Number = styled.Text`
    font-size: 21px;
    color: ${colors.purple};
    font-family: 'Nunito_700Bold';
    margin-top: 15%;
`;

// export const ContainerText = styled.View`
//     background-color: ${colors.purple};
//     border-radius: 10px;
//     width: 60%;
//     height: 35px;
//     align-items: center;
//     justify-content: center;
//     margin-top: 15%;
// `;