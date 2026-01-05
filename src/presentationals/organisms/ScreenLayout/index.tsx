import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import Header from "../../molecules/Header";
import { styles } from "./styles";
import { AlignmentType, IconName } from "../../types";

export interface ScreenLayoutProps extends SafeAreaViewProps {
    title?: string;
    align?: AlignmentType;
    rightAction?: () => void;
    rightActionIcon?: IconName;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({ title, align, rightAction, rightActionIcon, children, style, ...rest }) => {
    return (
        <SafeAreaView style={[styles.default, style]} {...rest}>
            <Header 
                title={title} 
                align={align}
                rightAction={rightAction}
                rightActionIcon={rightActionIcon} />
            {children}
        </SafeAreaView>
    )
};

export default ScreenLayout;