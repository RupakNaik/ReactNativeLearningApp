/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, ViewProps, ViewStyle, StyleProp } from "react-native";
import { styles } from "./styles";
import AppText from "../../atoms/AppText";
import { AlignmentType } from "../../types";

export interface HeaderProps extends ViewProps {
    /** The primary text to show in the header */
    title?: string;
    /** Optional content to render on the right or below (icons, actions, etc.) */
    children?: React.ReactNode;
    /** Optional container style overrides */
    style?: StyleProp<ViewStyle>;
    /** Optional alignment */
    align?: AlignmentType;
}

const Header: React.FC<HeaderProps> = ({ title, align, children, style, ...rest }) => {
    const alignment = align ?? "center";
    return (
        <View
            style={[
                styles.default,
                style,
                {
                    justifyContent: alignment === "center" ? "center" : "space-between"
                }]}
            {...rest}>
            {/* Show title if provided; otherwise show a sensible default */}
            <AppText style={[styles.title, { textAlign: alignment }]}>{title ?? "Header"}</AppText>
            {children}
        </View>
    );
}

export default Header;