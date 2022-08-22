import React from 'react';
import { Button } from '../../../components/button';
import { AddImage } from '../../../components/cards/addImage';
import { Input } from '../../../components/input';
import * as S from './styles';

export const EditPatient = () => {
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
                titleInput='Altura (cm)'
                placeholder='175'
            />
            <S.TitleCard>Alterar foto</S.TitleCard>
            <AddImage />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR'
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={10}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}