import React from 'react';
import * as S from './styles';

interface LineProps {
    marginTop?: number;
    marginBottom?: number;
}

export const Line = ({ marginTop, marginBottom }: LineProps) => {
    return (
        <S.Line
            marginTop={marginTop}
            marginBottom={marginBottom}>
        </S.Line>
    )
}