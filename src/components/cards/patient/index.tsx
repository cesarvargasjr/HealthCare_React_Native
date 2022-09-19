import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';
import { Button } from '../../Button';
import { useNavigation } from '@react-navigation/native';

interface CardProps {
    namePatient: string;
    agePatient: number;
}

export const CardPatient = ({ namePatient, agePatient }: CardProps) => {

    const navigation: any = useNavigation();

    function handleAge(agePatient) {
        var today = new Date();
        var currentYear = today.getFullYear();
        var anoNascParts = agePatient.split('/');
        var birthDay = anoNascParts[0];
        var birthMonth = anoNascParts[1];
        var birthYear = anoNascParts[2];
        var age = currentYear - birthYear;
        var mesAtual = today.getMonth() + 1;
        // Se mês atual for menor que o nascimento, não fez aniversário ainda  
        if (mesAtual < birthMonth) {
            age--;
        } else {
            // Se estiver no mês do nascimento, verificar o dia
            if (mesAtual == birthMonth) {
                if (new Date().getDate() < birthDay) {
                    //Se a data atual for menor que o dia de nascimento ele ainda não fez aniversário
                    age--;
                }
            }
        }
        return age;
    }

    return (
        <S.ContainerCard>
            <S.ContainerDescription>
                <S.ContainerInfo>
                    <S.TextBold>Nome: <S.Text>{namePatient}</S.Text></S.TextBold>
                    <S.TextBold>Idade: <S.Text>{handleAge(agePatient)} anos</S.Text></S.TextBold>
                </S.ContainerInfo>
                <Image
                    source={require('../../../assets/iconProfile.png')}
                    resizeMode="contain"
                    style={{ height: 56, width: 60 }}
                />
            </S.ContainerDescription>
            <Button
                typeButton='secondary'
                textButton='Ver mais detalhes'
                onPress={() => navigation.navigate('ProfilePatient')}
                marginTop={3}
                width={50}
            />
        </S.ContainerCard>
    )
}