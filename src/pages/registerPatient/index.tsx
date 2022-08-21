import React from 'react';
import { Button } from '../../components/button';
import { AddImage } from '../../components/cards/addImage';
import { Input } from '../../components/input';
import * as S from './styles';

export const RegisterPatient = () => {
    return (
        <S.ContainerPage>
            <Input
                typeInput='text'
                titleInput='Nome'
                placeholder='Nome completo'
            />
            <Input
                typeInput='number'
                titleInput='Idade'
                placeholder='80 anos'
            />
            <Input
                typeInput='number'
                titleInput='Peso'
                placeholder='70 kg'
            />
            <Input
                typeInput='number'
                titleInput='Altura (M)'
                placeholder='1.75'
            />
            <S.TitleCard>Foto do idoso</S.TitleCard>
            <AddImage />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR'
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={20}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}