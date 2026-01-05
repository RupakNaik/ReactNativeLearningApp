import React from "react";
import { StyleProp, View, ViewStyle } from 'react-native';
import { styles } from './styles'

import AppPressable from "../../atoms/AppPressable";
import AppText from "../../atoms/AppText";

export interface WeatherItemProps {
    style?: StyleProp<ViewStyle>;
    city: string;
    temperature: {
        high: number;
        average: number;
        low: number;
    };
    condition: string;
    humidity: number;
    onPress?: () => void;
}

const WeatherItem: React.FC<WeatherItemProps> = ({ onPress, style, city, temperature, condition, humidity }) => {
    // Optional improvement for future:
    const Container = onPress ? AppPressable : View;
    return (
        <Container
            {...(onPress && { onPress })}  // Only pass onPress if it exists
            style={[style, styles.default]}
            accessibilityLabel={`Weather in ${city}: ${temperature.average} degrees, ${condition}`}>
            {/* Row 1: City name (left) + Avg temp + Humidity (right) */}
            <View style={styles.row}>
                <AppText style={styles.cityLabel}>{city}</AppText>
                <View style={styles.rowRightContainer}>
                    <AppText style={styles.tAvg}>Average: {temperature.average} °C |</AppText>
                    <AppText style={styles.humidityLabel}>{humidity}%</AppText>
                </View>
            </View>

            {/* Row 2: Condition (left) + High/Low (right) */}
            <View style={[styles.row]}>
                <AppText style={styles.conditionLabel}>{condition}</AppText>
                <View style={styles.rowRightContainer}>
                    <AppText style={styles.tHigh}>High: {temperature.high} °C</AppText>
                    <AppText style={styles.tLow}>Low: {temperature.low} °C</AppText>
                </View>
            </View>
        </Container>
    )
}
export default WeatherItem;