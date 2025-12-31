import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

import ScreenLayout from '../../presentationals/organisms/ScreenLayout';
import AppText from '../../presentationals/atoms/AppText';
import AppPressable from '../../presentationals/atoms/AppPressable';
import { styles } from './styles';

/**
 * Tells typescript that this screen uses navigation props for the Home route of our root stack
 */
type Nav = NativeStackNavigationProp<RootStackParamList, "Home">;

export interface HomeScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
    // Props coming from RootNavigator to demonstrate dynamic behavior
    detailsEnabled?: boolean;
    toggleDetails?: () => void;

}
const HomeScreen: React.FC<HomeScreenProps> = ({
    children,
    style,
    detailsEnabled,
    toggleDetails,
    ...rest }) => {

    // gives component navigation object
    const navigation = useNavigation<Nav>();
    // Pushes the Details route if it’s present in the stack (it is when detailsEnabled is true).
    const goToDetails = () => {
        if (detailsEnabled) {
            navigation.navigate("Details");
        }
    }
    return (
        <ScreenLayout title="Home Screen" style={[styles.default, style]} {...rest}>

            <AppText style={{ marginBottom: 12 }}>Details screen is {detailsEnabled ? 'ENABLED' : 'DISABLED'}</AppText>

            <AppPressable
                onPress={goToDetails}
                style={[
                    styles.button,
                    !detailsEnabled && { backgroundColor: '#9CA3AF' }, // grey when disabled
                ]}
                accessibilityLabel='Navigate to Details Screen'
                disabled={!detailsEnabled}>
                <AppText style={styles.buttonLabel}>
                    {detailsEnabled ? "Go To Details Screen" : "Details Disabled"}
                </AppText>
            </AppPressable>
            {/* Toggle the dynamic flag (render only if parent supplied the callback) */}
            {toggleDetails && (
                <AppPressable
                    onPress={toggleDetails}
                    style={[
                        styles.button,
                        { marginTop: 12, backgroundColor: '#10B981' }
                    ]}
                accessibilityLabel="Toggle details availability">
                    <AppText style={styles.buttonLabel}>Toggle Details</AppText>
                </AppPressable>
            )}
            {children}
        </ScreenLayout>
    )
}
export default HomeScreen;