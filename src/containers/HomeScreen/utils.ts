import { weatherData, WeatherItemModel } from "../../data/weatherData"

export const getWeatherData = (): WeatherItemModel[] => {
    const ApiData = [{
        _id: '7',
        cityName: 'Pune',
        temperatureObj: {
            high: 31,
            average: 29,
            low: 25,
        },
        cityCondition: 'Clear',
        humidity: 58,
    }];
    const firstItem = ApiData[0];
    const weatherDataMap: WeatherItemModel = {
        id: firstItem._id,
        city: firstItem.cityName,
        temperature: firstItem.temperatureObj,
        humidity: firstItem.humidity,
        condition: firstItem.cityCondition
    }
    return [...weatherData, weatherDataMap];
}