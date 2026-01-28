import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { weatherData, WeatherItemModel } from "../../data/weatherData";

/**
 * State interface
 */
interface WeatherListState {
    loading: boolean,
    data: WeatherItemModel[],
    error: any,
    selectedWeatherId: string | number | null,
}

/**
 * Define initial state
 */
const initialState: WeatherListState = {
    loading: false,
    data: [],
    error: null,
    selectedWeatherId: null,
}

/** 
 * Async Thunk - fetches weather data
 * In production: replace setTimeout with actual API call
 */
export const fetchWeatherData = createAsyncThunk(
    'weatherList/fetchWeatherData',
    async () => {
        // Simulating API call - replace with real fetch in production
        await new Promise(resolve => setTimeout(resolve, 2000));
        return weatherData;
    }
);



/**
 * The Slice
 * reducers = for synchronous actions (like selecting an item)
 * extraReducers = for async thunk actions (like API calls)
 */
const weatherListSlice = createSlice({
    name: "weatherList",
    initialState,
    reducers: {
        // requestDailyWeatherReport: (state) => {
        //     state.loading = true;
        // },
        // responseDailyWeatherReport: (state, action: PayloadAction<WeatherItemModel[]>) => {
        //     state.loading = false;
        //     state.data = action.payload;
        // },
        selectWeatherItem: (state, action: PayloadAction<string | number | null>) => {
            state.selectedWeatherId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch weather';
            })
    }
});


/**
 * export actions and reducer
 */
export const { requestDailyWeatherReport, responseDailyWeatherReport, selectWeatherItem } = weatherListSlice.actions;
export default weatherListSlice.reducer;