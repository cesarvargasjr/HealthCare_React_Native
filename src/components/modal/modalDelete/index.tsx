import React from 'react';
import * as S from './styles'
import { Modal } from 'react-native';
import { Button } from '../../Button';

interface ModalProps {
    description: string;
    onPress: () => any;
    closeModal: () => any;
}

export const ModalDelete = ({ description, closeModal, onPress }: ModalProps) => {

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
                    <S.ContainerButton>
                        <Button
                            typeButton='primary'
                            textButton='SIM'
                            onPress={onPress}
                            marginTop={10}
                        />
                        <Button
                            typeButton='cancel'
                            textButton='CANCELAR'
                            onPress={closeModal}
                            marginTop={7}
                        />
                    </S.ContainerButton>
                </S.ContainerModal>
            </S.ContainerPage>
        </Modal>
    )
}
