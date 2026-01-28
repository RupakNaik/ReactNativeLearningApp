import { useNavigation } from "@react-navigation/native";
import { useWeatherView } from "./useWeatherView";
import { useWeatherData } from "./useWeatherData";
import {WeatherItemModel} from '../../../data/weatherData'

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { RequestDailyWeatherAction, ResponseDailyWeatherAction } from "../../../store/weatherList/weatherListAction";
import { AppDispatch, RootState } from "../../../store";

// import {increment} from '../../../store/counter/counterSlice';
import {requestDailyWeatherReport, responseDailyWeatherReport} from '../../../store/weatherList/weatherListSlice';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const useHomeDetails = () => {

    const navigation = useNavigation<Nav>();
    const weatherView = useWeatherView();
    const { weatherData } = useWeatherData();
    
    const dispatch = useDispatch<AppDispatch>(); //get the waiter
    const {loading, data} = useSelector((state: RootState) => state.weatherList);

    //counter example
    // const count = useSelector((state: RootState)=>state.counter.value);

    useEffect(() => {
        dispatch(requestDailyWeatherReport())
    }, [dispatch]);

    useEffect(() => {
        if(loading) {
            setTimeout(() => {
                dispatch(responseDailyWeatherReport(weatherData));
            }, 2000);
        }
    }, [loading, dispatch, weatherData]);

    const onWeatherItemPress = (item: WeatherItemModel) => {
        navigation.navigate('Details', { item });
    }
    
    // const onIncrementPress = () => {
    //     dispatch(increment());
    // };

    return {
        ...weatherView,

        //Add data,
        weatherData: data,

        //navigation handler
        onWeatherItemPress,

        //counter
        // onIncrementPress,
        // count
    }
}