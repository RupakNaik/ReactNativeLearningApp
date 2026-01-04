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

export const weatherData : WeatherItemModel[] =[
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