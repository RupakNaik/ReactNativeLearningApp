import { useState } from "react"
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';

import { RootState } from '../../../store';

import type { RootStackParamList } from "../../../navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Nav = NativeStackNavigationProp<RootStackParamList, 'Details'>

export const useDetail = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
    const navigation = useNavigation<Nav>();

    // const weatherItem = route?.params?.item; //reading from navigation params

    const weatherItem = useSelector((state: RootState) => state.weatherList.data.find(item => item.id === state.weatherList.selectedWeatherId));
    // const [title] = useState<string>(route?.params?.item?.city);
    const [title] = useState<string>(weatherItem?.city ?? '');
    const onBack = () => navigation.goBack();


    return {
        weatherItem,
        title,
        onBack
    }
}