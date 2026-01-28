import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherItemModel } from "../../data/weatherData";

/**
 * State interface
 */
interface WeatherListState {
    loading: boolean,
    data: WeatherItemModel[],
    error: any,
}

/**
 * Define initial state
 */
const initialState: WeatherListState = {
    loading: false,
    data: [],
    error: null
}

/**
 * The Slice
 */
const weatherListSlice = createSlice({
    name: "weatherList",
    initialState,
    reducers: {
        requestDailyWeatherReport : (state) => {
            state.loading = true;
        },
        responseDailyWeatherReport : (state, action:PayloadAction<WeatherItemModel[]>)=>{
            state.loading=false;
            state.data = action.payload;
        }
    }
});

/**
 * export actions and reducer
 */
export const {requestDailyWeatherReport,responseDailyWeatherReport } = weatherListSlice.actions;
export default weatherListSlice.reducer;