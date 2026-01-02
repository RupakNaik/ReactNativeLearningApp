import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

import DetailsTemplate from '../../templates/DetailsTemplate';
import { styles } from './styles';

type Nav = NativeStackNavigationProp<RootStackParamList, "Details">;

export interface DetailsScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ children, style, ...rest }) => {
    const navigation = useNavigation<Nav>();
    const onBack = () => navigation.goBack();
    return (
        <DetailsTemplate
            style={[styles.default, style]}
            onBack={onBack}
            {...rest}>
            {children}
        </DetailsTemplate>
    )
}
export default DetailsScreen;