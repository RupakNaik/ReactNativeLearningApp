import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../navigation/types';

import HomeTemplate from '../../templates/HomeTemplate';
import { styles } from './styles';

type Nav = NativeStackNavigationProp<RootStackParamList,"Home">;

export interface HomeScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;

}
const HomeScreen: React.FC<HomeScreenProps> = ({
    children,
    style,
    ...rest }) => {
        const navigation = useNavigation<Nav>();
        const onNextPress = () => navigation.navigate('Details');

    return (
        <HomeTemplate
            style={[styles.default, style]}
            onNextPress={onNextPress}
            {...rest}>
            {children}
        </HomeTemplate>
    )
}
export default HomeScreen;