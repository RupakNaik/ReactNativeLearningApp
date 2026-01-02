
import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

export const styles = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: colors.background
    },
    button: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: 8,
        backgroundColor: colors.neutral
    },
    buttonLabel: {
        color: colors.background
    },
});
