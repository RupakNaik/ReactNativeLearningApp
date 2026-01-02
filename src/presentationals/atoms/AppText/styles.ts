import { StyleSheet } from "react-native";
import { colors, typography } from "../../../theme";

export const styles = StyleSheet.create({
  default: {
    fontSize: typography.fontSizes.lg,
    lineHeight: typography.lineHeights.md,
    color: colors.textPrimary,
    fontFamily: typography.fontFamilyRegular,
    fontWeight: typography.fontWeight.medium,
  },
});