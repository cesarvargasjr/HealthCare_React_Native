import React from 'react';
import * as S from './styles'
import { Modal } from 'react-native';
import { Button } from '../../button';

interface ModalProps {
    description: string;
    closeModal: () => any;
}

export const ModalDelete = ({ description, closeModal }: ModalProps) => {

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
                        onPress={() => console.log('***DEFINIR ROTA***')}
                        marginTop={10}
                    />
                    <Button
                        typeButton='cancel'
                        textButton='CANCELAR'
                        onPress={closeModal}
                        marginTop={7}
                    />
                </S.ContainerModal>
            </S.ContainerPage>
        </Modal>
    )
}
