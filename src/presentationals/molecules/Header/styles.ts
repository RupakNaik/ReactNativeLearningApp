import { StyleSheet } from "react-native";
import { colors, typography, spacing } from "../../../theme";

export const styles = StyleSheet.create({
    default: {
        backgroundColor: colors.background,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: spacing.md,
        height: 56, // gives the header a consistent height
    },
    sideContainer: {
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: typography.fontSizes.lg,
        fontWeight: typography.fontWeight.semiBold,
        color: colors.textPrimary,
    },
}
)