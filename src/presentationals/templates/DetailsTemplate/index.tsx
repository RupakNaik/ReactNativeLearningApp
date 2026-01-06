import React from "react";
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import AppPressable from "../../atoms/AppPressable";
import AppText from "../../atoms/AppText";
import ScreenLayout from "../../organisms/ScreenLayout";
import { styles } from './styles';

export interface DetailsTemplateProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    title?: string;
    children?: React.ReactNode;
    onBack: () => void;
}

const DetailsTemplate: React.FC<DetailsTemplateProps> = ({ style, title, children, onBack, ...rest }) => {
    return (
        <ScreenLayout
            title={title ?? "Details"}
            style={[styles.default, style]}
            {...rest}>
            <AppText style={styles.info}>This is the Details Screen</AppText>
            <AppPressable
                onPress={onBack}
                style={styles.button}
                accessibilityLabel="Go back">
                <AppText style={styles.buttonLabel}>Go Back</AppText>
            </AppPressable>
            {children}</ScreenLayout>
    );
}

export default DetailsTemplate;