import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import * as S from './styles';

export const RegisterRemedie = () => {
    return (
        <S.ContainerPage>
            <Input
                typeInput='text'
                placeholder='Paracetamol'
                titleInput='Nome do medicamento'
            />
            <Input
                typeInput='number'
                placeholder='A cada 12h'
                titleInput='Intervalo para medicação'
            />
            <Input
                typeInput='number'
                placeholder='30'
                titleInput='Quantidade de comprimidos na cartela'
            />
            <Input
                typeInput='number'
                placeholder='7 dias'
                titleInput='Lembrete por quantos dias'
            />
            <S.ContainerButton>
                <Button
                    typeButton='primary'
                    textButton='SALVAR'
                    onPress={() => console.log('***DEFINIR ROTA***')}
                    marginTop={5}
                />
            </S.ContainerButton>
        </S.ContainerPage>
    )
}