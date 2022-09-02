import React from 'react';
import * as S from './styles'
import { Modal } from 'react-native';
import { Button } from '../../button';
import { useNavigation } from '@react-navigation/native';

interface ModalProps {
    description: string;
    navigate: () => any;
    closeModal?: () => any;
}

export const ModalNotifications = ({ description, closeModal, navigate }: ModalProps) => {

    const navigation: any = useNavigation();

    return (
        <Modal
            transparent={true}
        >
            <S.ContainerPage>
                <S.Backgroud onTouchEnd={closeModal} />
                <S.ContainerModal>
                    <S.Description>
                        {description}
                    </S.Description>
                    <Button
                        typeButton='primary'
                        textButton='SIM'
                        onPress={navigate}
                        marginTop={10}
                    />
                    <Button
                        typeButton='tertiary'
                        textButton='VOLTAR'
                        onPress={() => navigation.navigate('Home')}
                        marginTop={7}
                    />
                </S.ContainerModal>
            </S.ContainerPage>
        </Modal>
    )
}
