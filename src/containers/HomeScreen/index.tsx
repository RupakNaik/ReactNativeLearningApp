import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import HomeTemplate from '../../presentationals/templates/HomeTemplate';
import { styles } from './styles';

import { useHomeDetails } from './hooks';


export interface HomeScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
const HomeScreen: React.FC<HomeScreenProps> = ({
    children,
    style,
    ...rest }) => {
    //HOOKS
    const {
        weatherData,
        viewType,
        isModalVisible,
        selectView,
        openModal,
        closeModal,
        onWeatherItemPress } = useHomeDetails();

    return (
        <HomeTemplate
            style={[styles.default, style]}
            viewType={viewType}
            onSelectView={selectView}
            isModalVisible={isModalVisible}
            onOpenModal={openModal}
            onCloseModal={closeModal}
            _onPress={onWeatherItemPress}
            data={weatherData}
            {...rest}>
            {children}
        </HomeTemplate>
    )
}
export default HomeScreen;