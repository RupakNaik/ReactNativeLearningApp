import { StyleSheet } from 'react-native';
import { typography, spacing, colors } from '../../../theme';

export const styles = StyleSheet.create({
    default: {
        padding: spacing.md,
        backgroundColor: colors.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.sm,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cityLabel: {
        fontSize: typography.fontSizes.xl,
        fontWeight: typography.fontWeight.semiBold,
        color: colors.textPrimary
    },
    conditionLabel: {
        fontSize: typography.fontSizes.lg,
        color: colors.textPrimary
    },
    humidityLabel: {
        fontSize: typography.fontSizes.md,
        color: colors.textPrimary
    },
    rowRightContainer: {
        flexDirection: 'row',
        gap: spacing.sm,
    },
    tHigh: {
        color: colors.danger
    },
    tAvg: {
        color: colors.neutral,
        fontWeight: typography.fontWeight.bold,
        fontSize: typography.fontSizes.md,
    },
    tLow: {
        color: colors.primary
    }
})