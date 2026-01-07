import {weatherData} from '../../../data/weatherData';

export const useWeatherData = () =>{
    //return static data
    // to be use to handle API calls
    return{
        weatherData,
    }
}