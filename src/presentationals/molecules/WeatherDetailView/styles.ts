import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
    default: {
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    row:{
        flexDirection:'row'
    },
    condition: {
        fontSize: typography.fontSizes.xl,
        // lineHeight: typography.lineHeights.relaxed,
    },
    averageTemp: {
        fontSize: typography.fontSizes.xxxxxl,
        // lineHeight: typography.lineHeights.normal,
    },
    highTemp: {
        fontSize: typography.fontSizes.md
    },
    lowTemp: {
        fontSize: typography.fontSizes.md
    },
    humidity:{
        fontSize: typography.fontSizes.lg
    }
});