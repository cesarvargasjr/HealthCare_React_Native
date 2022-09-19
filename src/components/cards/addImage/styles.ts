import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.TouchableOpacity`
    border-radius: 8px;
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.purpleInput};

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.5;
    shadow-radius: 3px;
    elevation: 5;
`;