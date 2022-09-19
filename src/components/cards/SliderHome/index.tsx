import React from 'react';
import * as S from './styles';
import { Button } from '../../Button';
import { useNavigation } from '@react-navigation/native';

export const SliderHome = () => {

    const navigation: any = useNavigation();

    return (
        <S.ContainerCard>
            <S.ContainerDescription>
                <S.ContainerInfo>
                    <S.TextBold>Nome</S.TextBold>
                    <S.TextBold>Idade</S.TextBold>
                </S.ContainerInfo>
            </S.ContainerDescription>
            {/* <Button
                typeButton='secondary'
                textButton='Ver mais'
                onPress={() => console.log('*******')}
                marginTop={3}
                width={50}
            /> */}
        </S.ContainerCard>
    )
}