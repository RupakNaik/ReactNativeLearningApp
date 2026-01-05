import React from 'react';
import { ViewStyle, StyleProp, FlatList } from 'react-native';

import { WeatherItemModel } from '../../../data/weatherData';
import { styles } from './styles';
import WeatherGridItem from '../../molecules/WeatherGridItem';

export interface WeatherGridProps {
    style?: StyleProp<ViewStyle>;
    data: WeatherItemModel[];
    onItemPress?: (item: WeatherItemModel) => void; // Optional: handle item press
}

const WeatherGrid: React.FC<WeatherGridProps> = ({ data, style, onItemPress, }) => {
    return (
        <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item }) =>
            (<WeatherGridItem
                city={item.city}
                temperature={item.temperature}
                humidity={item.humidity}
                condition={item.condition}
                onPress={()=> onItemPress?.(item)} />)
            }
            keyExtractor={item => item.id}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            style={style} />
    );
}

export default WeatherGrid;