import React from 'react';
import * as S from './styles';
import { Image } from 'react-native';
import { Button } from '../../Button';
import { useNavigation } from '@react-navigation/native';
import { FormPatient, usePatient } from '../../../contexts/Patient';
import Icon from 'react-native-vector-icons/FontAwesome';
import calculateAge from '../../../utils/calculateAge';
import colors from '../../../utils/colors';

export const CardPatient = ({ id, namePatient, date, weight, height }: FormPatient) => {

    const navigation: any = useNavigation();
    const { setPatient } = usePatient();

    const getAge = () => calculateAge(date);

    const handlePatient = () => {
        setPatient({ id, namePatient, date, weight, height });
        navigation.navigate('ProfilePatient');
    }

    return (
        <S.ContainerCard>
            <S.ContainerDescription>
                <Icon name="user-o" size={30} color={colors.purple} />
                <S.ContainerInfo>
                    <S.TextBold>Nome: <S.Text>{namePatient}</S.Text></S.TextBold>
                    <S.TextBold>Idade: <S.Text>{getAge()} anos</S.Text></S.TextBold>
                </S.ContainerInfo>
                {/* <Image
                    source={require('../../../assets/iconProfile.png')}
                    resizeMode="contain"
                    style={{ height: 56, width: 60 }}
                /> */}
            </S.ContainerDescription>
            <Button
                typeButton='secondary'
                textButton='Ver mais detalhes'
                onPress={() => handlePatient()}
                marginTop={3}
                width={50}
            />
        </S.ContainerCard>
    )
}