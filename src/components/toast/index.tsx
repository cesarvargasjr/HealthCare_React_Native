import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';
import colors from '../../utils/colors';

interface Props {
    children: React.ReactChild;
}

export const ToastStyles = ({ children }: Props) => {

    return (
        <ToastProvider
            placement="bottom"
            duration={4000}
            animationType="slide-in"
            animationDuration={350}
            successColor={colors.green}
            dangerColor={colors.red}
            warningColor={colors.orange}
            normalColor={colors.grey}
            textStyle={{ fontSize: 16 }}
            offset={50}
            offsetTop={30}
            offsetBottom={40}
            swipeEnabled={true}>
            {children}
        </ToastProvider>
    )
}