import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/colors';

export const AddImage = () => {
    return (
        <S.ContainerCard>
            <Icon name="plus" size={20} color={colors.purple} />
        </S.ContainerCard>
    )
}