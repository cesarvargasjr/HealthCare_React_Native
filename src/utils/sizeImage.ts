import { Dimensions } from "react-native";

export const SizeImage = (realW, realH, resize) => {

    const dimensions = Dimensions.get('window');
    const percentage = () =>  { 
        if (resize) {
            return dimensions.width - resize
        } 
        return dimensions.width
    };
    const width = Number((realW * (percentage() / realW)).toFixed(0));
    const height = Number((realH * (percentage() / realW)).toFixed(0));

    return { width, height }
}