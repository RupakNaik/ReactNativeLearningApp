import { StyleSheet } from "react-native";
import { spacing, colors, typography } from '../../../theme';

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: colors.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: spacing.lg,
        width: '80%',
    },
    title: {
        fontSize: typography.fontSizes.lg,
        fontWeight: typography.fontWeight.semiBold,
        marginBottom: spacing.md,
    }
});