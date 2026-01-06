import React, { useState } from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

import HomeTemplate from '../../presentationals/templates/HomeTemplate';
import { styles } from './styles';
import { WeatherItemModel, weatherData } from '../../data/weatherData';

type Nav = NativeStackNavigationProp<RootStackParamList, "Home">;

export interface HomeScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
const HomeScreen: React.FC<HomeScreenProps> = ({
    children,
    style,
    ...rest }) => {
    const [viewType, setViewType] = useState<'list' | 'grid'>('list');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation<Nav>();
    const onNextPress = (item: WeatherItemModel) => navigation.navigate('Details', {item});

    //handler functions
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);
    const selectView = (view: 'list' | 'grid') => setViewType(view);

    return (
        <HomeTemplate
            style={[styles.default, style]}
            viewType={viewType}
            onSelectView={selectView}
            isModalVisible={isModalVisible}
            onOpenModal={openModal}
            onCloseModal={closeModal}
            _onPress={onNextPress}
            data={weatherData}
            {...rest}>
            {children}
        </HomeTemplate>
    )
}
export default HomeScreen;