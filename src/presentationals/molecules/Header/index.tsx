/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, ViewProps, ViewStyle, StyleProp } from "react-native";

import { styles } from "./styles";
import AppText from "../../atoms/AppText";
import IconButton from "../IconButton";
import { AlignmentType, IconName } from "../../types";
import{colors}from '../../../theme'

export interface HeaderProps extends ViewProps {
    title?: string;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    align?: AlignmentType;
    rightAction?: () => void;
    rightActionIcon?: IconName;
}

const Header: React.FC<HeaderProps> = ({ title, align, children, rightAction, rightActionIcon, style, ...rest }) => {
    const alignment = align ?? "center";
    return (
        <View
            style={[styles.default, style]}
            {...rest}>
            {/* Left spacer for centering */}
            <View style={styles.sideContainer}>
                {/* Left action can go here if needed */}
            </View>
            
            {/* Title in center */}
            <View style={styles.titleContainer}>
                <AppText style={[styles.title, { textAlign: alignment }]}>{title ?? "Header"}</AppText>
            </View>
            
            {/* Right action */}
            <View style={styles.sideContainer}>
                {rightAction && rightActionIcon && (
                    <IconButton
                        iconName={rightActionIcon}
                        onPress={rightAction}
                        accessibilityLabel="Header action"
                        color={colors.textPrimary} />
                )}
            </View>
            {children}
        </View>
    );
}

export default Header;