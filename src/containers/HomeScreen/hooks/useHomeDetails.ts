import { useNavigation } from "@react-navigation/native";
import { useWeatherView } from "./useWeatherView";
import { useWeatherData } from "./useWeatherData";
import {WeatherItemModel} from '../../../data/weatherData'

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";

type Nav = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const useHomeDetails = () => {

    const navigation = useNavigation<Nav>();
    const weatherView = useWeatherView();
    const { weatherData } = useWeatherData();

    const onWeatherItemPress = (item: WeatherItemModel) => {
        navigation.navigate('Details', { item });
    }
    return {
        ...weatherView,

        //Add data,
        weatherData,

        //navigation handler
        onWeatherItemPress
    }
}