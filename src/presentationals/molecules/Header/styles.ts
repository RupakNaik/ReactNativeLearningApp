import { StyleSheet } from "react-native";
import { colors, typography, spacing } from "../../../theme";

export const styles = StyleSheet.create({
    default: {
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: spacing.md,
        height: 56, // gives the header a consistent height

    },
    title: {
        fontSize: typography.fontSizes.lg,
        fontWeight: typography.fontWeight.semiBold,
        color: colors.textPrimary,
    },
}
)