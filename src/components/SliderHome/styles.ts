import styled from 'styled-components/native';
import { View } from 'react-native';
import colors from '../../utils/colors';

export const SliderContainer = styled.View`
  height: 47%;
  width: 100%;
  border-radius: 10px;
  background-color: ${colors.white};

  shadow-color: ${colors.purple};
  shadow-offset: 1px 1px;
  shadow-opacity: 0.4;
  elevation: 5;
`;

export const ContainerContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  text-align: center;
  width: 70%;
`;

export const ContainerButton = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 14px;
`;