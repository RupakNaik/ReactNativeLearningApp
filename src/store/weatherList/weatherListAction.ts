import { WeatherItemModel } from "../../data/weatherData";

export const REQUEST_DAILY_WEATHER_REPORT = "REQUEST_DAILY_WEATHER_REPORT";
export const RESPONSE_DAILY_WEATHER_REPORT = "RESPONSE_DAILY_WEATHER_REPORT";
export const ERROR_DAILY_WEATHER_REPORT = "ERROR_DAILY_WEATHER_REPORT";

export const RequestDailyWeatherAction = (data: any) => ({
    type: REQUEST_DAILY_WEATHER_REPORT,
    payload: data
});

export const ResponseDailyWeatherAction = (data: WeatherItemModel[]) => ({
    type: RESPONSE_DAILY_WEATHER_REPORT,
    payload: data
});