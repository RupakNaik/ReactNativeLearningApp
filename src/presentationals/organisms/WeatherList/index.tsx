import React from 'react';
import { ViewStyle, StyleProp, FlatList, ActivityIndicator } from 'react-native';

import { WeatherItemModel } from '../../../data/weatherData';
import { styles } from './styles';
import WeatherItem from '../../molecules/WeatherItem';
import { useSelector } from 'react-redux';

export interface WeatherListProps {
    style?: StyleProp<ViewStyle>;
    data: WeatherItemModel[];
    onItemPress?: (item: WeatherItemModel) => void; // Optional: handle item press
}

const WeatherList: React.FC<WeatherListProps> = ({ data, style, onItemPress, }) => {

    const loading = useSelector(state => state?.weatherList?.loading)

    return (
        <FlatList
            data={data}
            renderItem={({ item }) =>
            (<WeatherItem
                city={item.city}
                temperature={item.temperature}
                humidity={item.humidity}
                condition={item.condition}
                onPress={()=> onItemPress?.(item)} />)
            }
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            style={style} 
            ListEmptyComponent={loading ? <ActivityIndicator size={'large'}/> : null}
        />
    );
}

export default WeatherList;