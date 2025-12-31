import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

import ScreenLayout from '../../presentationals/organisms/ScreenLayout';
import AppText from '../../presentationals/atoms/AppText';
import AppPressable from '../../presentationals/atoms/AppPressable';
import { styles } from './styles';

type Nav = NativeStackNavigationProp<RootStackParamList, "Details">;

export interface DetailsScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ children, style, ...rest }) => {
    const navigation = useNavigation<Nav>();

    return (
        <ScreenLayout title="Details Screen" style={[styles.default, style]} {...rest}>
            <AppText style={{ marginBottom: 12 }}>This is the details screen.</AppText>
            <AppPressable
                onPress={() => { navigation.goBack() }}
                style={styles.button}
                accessibilityLabel="Go back to previous screen">
                <AppText style={styles.buttonLabel}>Go Back</AppText>
            </AppPressable>
            {children}
        </ScreenLayout>
    )
}
export default DetailsScreen;