export type WeatherItemModel = {
    id: string;
    city: string;
    temperature: {
        high: number,
        average: number,
        low: number,
    };
    condition: string;
    humidity: number;
}

export const heavyWeatherItem = {
    id: 'weather-heavy-001',
    city: 'Mumbai',
    country: 'India',
    condition: 'Sunny',
    coordinates: {
        lat: 19.076,
        lon: 72.8777,
    },

    temperature: {
        current: 32,
        feelsLike: 36,
        day: {
            high: 34,
            average: 32,
            low: 29,
        },
        hourly: Array.from({ length: 48 }, (_, i) => ({
            hour: i,
            temp: 28 + (i % 6),
            feelsLike: 30 + (i % 6),
        })),
    },

    humidity: {
        current: 65,
        hourly: Array.from({ length: 48 }, (_, i) => ({
            hour: i,
            value: 55 + (i % 20),
        })),
    },

    wind: {
        speed: 14,
        direction: 'SW',
        hourly: Array.from({ length: 48 }, (_, i) => ({
            hour: i,
            speed: 10 + (i % 8),
            gust: 15 + (i % 10),
        })),
    },

    precipitation: {
        chance: 40,
        hourly: Array.from({ length: 48 }, (_, i) => ({
            hour: i,
            chance: i % 3 === 0 ? 60 : 20,
            amount: i % 5 === 0 ? 3.2 : 0,
        })),
    },

    airQuality: {
        index: 156,
        category: 'Unhealthy',
        pollutants: {
            pm10: 142,
            pm25: 88,
            no2: 54,
            so2: 12,
            o3: 66,
        },
        hourlyForecast: Array.from({ length: 48 }, (_, i) => ({
            hour: i,
            index: 120 + (i % 40),
            category: 'Moderate',
        })),
    },

    forecasts: {
        daily: Array.from({ length: 14 }, (_, i) => ({
            day: `Day ${i + 1}`,
            temperature: {
                high: 30 + (i % 5),
                low: 24 + (i % 4),
            },
            condition: 'Partly Cloudy',
            humidity: 60 + (i % 10),
            windSpeed: 12 + (i % 6),
        })),
    },

    alerts: Array.from({ length: 5 }, (_, i) => ({
        id: `alert-${i}`,
        title: 'Heavy Rain Warning',
        description:
            'This is a detailed weather alert message explaining the severity, expected impact, safety precautions, evacuation suggestions, and emergency contact instructions. '.repeat(
                10
            ),
        severity: 'High',
        issuedAt: new Date().toISOString(),
    })),

    metadata: {
        source: 'Simulated Weather Engine v1.0',
        fetchedAt: new Date().toISOString(),
        notes:
            'This payload is intentionally large to simulate real-world API overfetching and demonstrate navigation performance issues in React Native applications. '.repeat(
                20
            ),
    },
};

export const weatherData: WeatherItemModel[] = [
    {
        id: '1',
        city: 'Mumbai',
        temperature: {
            high: 34,
            average: 32,
            low: 29,
        },
        condition: 'Sunny',
        humidity: 65,
    },
    {
        id: '2',
        city: 'Delhi',
        temperature: {
            high: 38,
            average: 35,
            low: 31,
        },
        condition: 'Hazy',
        humidity: 55,
    },
    {
        id: '3',
        city: 'Bengaluru',
        temperature: {
            high: 28,
            average: 26,
            low: 22,
        },
        condition: 'Cloudy',
        humidity: 70,
    },
    {
        id: '4',
        city: 'Chennai',
        temperature: {
            high: 36,
            average: 34,
            low: 30,
        },
        condition: 'Humid',
        humidity: 75,
    },
    {
        id: '5',
        city: 'Kolkata',
        temperature: {
            high: 33,
            average: 31,
            low: 27,
        },
        condition: 'Rainy',
        humidity: 80,
    },
    {
        id: '6',
        city: 'Hyderabad',
        temperature: {
            high: 35,
            average: 33,
            low: 28,
        },
        condition: 'Sunny',
        humidity: 60,
    },
    {
        id: '7',
        city: 'Pune',
        temperature: {
            high: 31,
            average: 29,
            low: 25,
        },
        condition: 'Clear',
        humidity: 58,
    },
    {
        id: '8',
        city: 'Jaipur',
        temperature: {
            high: 40,
            average: 36,
            low: 32,
        },
        condition: 'Hot',
        humidity: 45,
    },
    {
        id: '9',
        city: 'Ahmedabad',
        temperature: {
            high: 41,
            average: 37,
            low: 33,
        },
        condition: 'Dry',
        humidity: 40,
    },
    {
        id: '10',
        city: 'Shimla',
        temperature: {
            high: 22,
            average: 18,
            low: 12,
        },
        condition: 'Cold',
        humidity: 50,
    },
];