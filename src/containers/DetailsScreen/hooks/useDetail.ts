import { RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react"
import { useNavigation } from "@react-navigation/native";

import type { RootStackParamList } from "../../../navigation/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Nav = NativeStackNavigationProp<RootStackParamList,'Details'>

export const useDetail = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
    const navigation = useNavigation<Nav>();
    
    const weatherItem = route?.params?.item;
    const [title] = useState<string>(route?.params?.item?.city);
    const onBack = () => navigation.goBack();


    return {
        weatherItem,
        title,
        onBack
    }
}