import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const ContainerCard = styled.View`
    width: 100%;
    border-radius: 10px;
    padding: 5%;
    margin-bottom: 5%;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.white};
    /* border: 0.5px solid ${colors.purple}; */
    /* overflow: hidden; */

    shadow-color: ${colors.purple};
    shadow-offset: 1px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 3px;
    elevation: 5;
`;