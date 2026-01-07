import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import ScreenLayout from '../../organisms/ScreenLayout';
import WeatherList from '../../organisms/WeatherList';
import WeatherGrid from '../../organisms/WeatherGrid';
import ViewToggleModal from '../../organisms/ViewToggleModal';
import { styles } from './styles';
import { WeatherItemModel } from '../../../data/weatherData';

import type { IconName } from '../../types';

export interface HomeTemplateProps extends ViewProps {
    style?: StyleProp<ViewStyle>,
    children?: React.ReactNode,
    _onPress?: (item: WeatherItemModel) => void;
    viewType: 'list' | 'grid';
    onSelectView: (view: 'list' | 'grid') => void;
    isModalVisible: boolean;
    onOpenModal: () => void;
    onCloseModal: () => void;
    data: WeatherItemModel[];
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({
    style,
    children,
    data,
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
            rightActionIcon= {"EllipsisVertical" as IconName}
            align="center"
            {...rest}>
            {children}
            {viewType === "list" ? <WeatherList data={data} onItemPress={_onPress} /> : <WeatherGrid data={data} onItemPress={_onPress} />}
            <ViewToggleModal
                visible={isModalVisible}
                selectView={viewType}
                onSelectView={onSelectView}
                onClose={onCloseModal} />
        </ScreenLayout>
    );
}

export default HomeTemplate;