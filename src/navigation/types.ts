import { WeatherItemModel } from "../data/weatherData";

/**
 * navigation params
 * A single place to declare route names and their params (none for now). This makes navigation type‑safe everywhere.
 */
export type RootStackParamList = {
    Home: undefined;
    // Details: {item: WeatherItemModel};
    Details: {weatherId: string|number|null};
}