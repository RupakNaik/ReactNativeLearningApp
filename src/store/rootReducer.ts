import { combineReducers } from "redux";
// import { weatherListReducer } from "./weatherList/weatherListReducer";
// calling counter reducer
import counterReducer from './counter/counterSlice';
// calling weatherList slice redicer
import weatherListReducer from './weatherList/weatherListSlice';

const rootReducer = combineReducers({
    weatherList: weatherListReducer,
    counter: counterReducer
});

export default rootReducer;