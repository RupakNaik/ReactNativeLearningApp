import React from 'react';
import { View, StyleProp, ViewProps } from 'react-native';
import { styles } from './styles';

import AppText from '../../atoms/AppText';

import type { WeatherItemModel } from '../../../data/weatherData';

export interface WeatherDetailViewProps {
    style?: StyleProp<ViewProps>;
    weatherDetails: WeatherItemModel;
}

const WeatherDetailView: React.FC<WeatherDetailViewProps> = ({ style, weatherDetails }) => {
    return (
        <View style={[styles.default, style]}>
            <AppText style={styles.condition}>{weatherDetails.condition}</AppText>
            <AppText style={styles.averageTemp}>{weatherDetails.temperature.average}°C</AppText>
            <View style={styles.row}>
                <AppText style={styles.highTemp}>High: {weatherDetails.temperature.high}°C</AppText>
                <AppText> | </AppText>
                <AppText style={styles.lowTemp}>Low: {weatherDetails.temperature.low}°C</AppText>
            </View>
            <AppText style={styles.humidity}>Humidity: {weatherDetails.humidity}</AppText>
        </View>
    );
}

export default WeatherDetailView;