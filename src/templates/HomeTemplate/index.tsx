import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import ScreenLayout from '../../presentationals/organisms/ScreenLayout';
import WeatherList from '../../presentationals/organisms/WeatherList';
import WeatherGrid from '../../presentationals/organisms/WeatherGrid';
import ViewToggleModal from '../../presentationals/organisms/ViewToggleModal';
import { styles } from './styles';
import { weatherData } from '../../data/weatherData';

export interface HomeTemplateProps extends ViewProps {
    style?: StyleProp<ViewStyle>,
    children?: React.ReactNode,
    _onPress?: () => void;
    viewType: 'list' | 'grid';
    onSelectView: (view: 'list' | 'grid') => void;
    isModalVisible: boolean;
    onOpenModal: () => void;
    onCloseModal: () => void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
    style,
    children,
    _onPress,
    viewType,
    onSelectView,
    isModalVisible,
    onOpenModal,
    onCloseModal,
    ...rest }) => {
    return (
        <ScreenLayout
            title="Home"
            style={[styles.default, style]}
            rightAction={onOpenModal}
            rightActionIcon="EllipsisVertical"
            align="center"
            {...rest}>
            {children}
            {viewType === "list" ? <WeatherList data={weatherData} /> : <WeatherGrid data={weatherData} />}
            <ViewToggleModal
                visible={isModalVisible}
                selectView={viewType}
                onSelectView={onSelectView}
                onClose={onCloseModal} />
        </ScreenLayout>
    );
}

export default HomeTemplate;