import { WeatherItemModel } from "../../data/weatherData"
import { REQUEST_DAILY_WEATHER_REPORT, RESPONSE_DAILY_WEATHER_REPORT } from "./weatherListAction"

export type WEATHER_LIST_DATA_MODEL = {
    loading: boolean,
    data: WeatherItemModel | null,
    error: any
}

const initialData: WEATHER_LIST_DATA_MODEL = {
    loading: false,
    data: null,
    error: null
}

export const weatherDeailReducer = (state: any = initialData, action: {type: string, payload?: any}): WEATHER_LIST_DATA_MODEL => {
    switch(action.type) {
        case REQUEST_DAILY_WEATHER_REPORT:
            return {
                ...state,
                loading: true,
            }
        case RESPONSE_DAILY_WEATHER_REPORT:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}