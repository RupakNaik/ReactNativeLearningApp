import React from "react";
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import AppPressable from "../../atoms/AppPressable";
import AppText from "../../atoms/AppText";
// import WeatherItem from "../../molecules/WeatherItem";
// import WeatherGridItem from "../../molecules/WeatherGridItem";
import WeatherDetailView from "../../molecules/WeatherDetailView";
import ScreenLayout from "../../organisms/ScreenLayout";
import { styles } from './styles';

import { WeatherItemModel } from "../../../data/weatherData";

export interface DetailsTemplateProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    title?: string;
    children?: React.ReactNode;
    onBack: () => void;
    weatherItem: WeatherItemModel;
}

const DetailsTemplate: React.FC<DetailsTemplateProps> = ({ style, title, children, onBack, weatherItem, ...rest }) => {

    return (
        <ScreenLayout
            title={title ?? "Details"}
            style={[styles.default, style]}
            {...rest}>
            
            {/* <AppText style={styles.info}>This is the Details Screen</AppText> */}
            {/* <AppText>{weatherItem?.condition}</AppText>
            <AppText>{weatherItem?.humidity}</AppText>
            <AppText>{weatherItem?.temperature.average}</AppText>
            <AppText>{weatherItem?.temperature.high}</AppText>
            <AppText>{weatherItem?.temperature.low}</AppText> */}

            {/* <WeatherItem 
                condition={weatherItem?.condition} 
                humidity={weatherItem?.humidity} 
                temperature={weatherItem?.temperature}
                style={styles.weatherItem} />
            
            <WeatherGridItem 
                condition={weatherItem?.condition} 
                humidity={weatherItem?.humidity} 
                temperature={weatherItem?.temperature}
                style={styles.weatherItem} /> */}

            <WeatherDetailView weatherDetails={weatherItem} />

            <AppPressable
                onPress={onBack}
                style={styles.button}
                accessibilityLabel="Go back">
                <AppText style={styles.buttonLabel}>Go Back</AppText>
            </AppPressable>
            {children}
        </ScreenLayout>
    );
}

export default DetailsTemplate;