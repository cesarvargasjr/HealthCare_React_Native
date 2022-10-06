import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Image, Platform } from 'react-native';
import * as S from './styles';

interface SliderProps {
    slider: SliderContentProps[];
}

interface SliderContentProps {
    key: string;
    image: string;
    description: string;
}

export const SliderOnboarding = ({ slider }: SliderProps) => {
    function renderSlides({ item }: any) {
        return (
            <S.ContainerContent>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'contain',
                        maxHeight: 350,
                        maxWidth: 350,
                        height: 350,
                        width: 350,
                    }}
                />
                <S.Text>{item.description}</S.Text>
            </S.ContainerContent>
        );
    }

    return (
        <S.SliderContainer>
            <AppIntroSlider
                renderItem={renderSlides}
                data={slider}
                showNextButton={false}
                showPrevButton={false}
                showDoneButton={false}
                dotStyle={{
                    position: 'relative',
                    top: (Platform.OS == 'ios' ? 20 : 23),
                    width: 7,
                    height: 7,
                    backgroundColor: '#E3E4FF',
                }}
                activeDotStyle={{
                    top: (Platform.OS == 'ios' ? 20 : 23),
                    width: 7,
                    height: 7,
                    backgroundColor: '#6C63FF',
                }}
            />
        </S.SliderContainer>
    );
};