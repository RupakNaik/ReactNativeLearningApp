import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import * as LucideIcons from 'lucide-react-native';
import { IconName } from '../../types';
import AppPressable from '../../atoms/AppPressable';
import { styles } from './styles';
import { colors, typography } from '../../../theme';

// Type for Lucide icon props
type LucideIconProps = {
    size?: number;
    color?: string;
    strokeWidth?: number;
};

export interface IconButtonProps {
    style?: StyleProp<ViewStyle>;
    iconName: IconName;
    size?: number;
    color?: string;
    strokeWidth?: number;
    onPress?: () => void;
    accessibilityLabel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
    color = colors.textPrimary,
    style,
    iconName,
    size = typography.fontSizes.xl,
    strokeWidth = 2,
    accessibilityLabel,
    onPress }) => {
    // Get the icon component by name
    const IconComponent = LucideIcons[iconName] as React.ComponentType<LucideIconProps> | undefined;

    // Safety check - return null if icon not found
    if (!IconComponent) {
        console.warn(`Icon "${iconName}" not found in LucideIcons`);
        return null;
    }

    return (
        <AppPressable
            onPress={onPress}
            style={[style, styles.default]}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}>
            <IconComponent size={size} color={color} strokeWidth={strokeWidth} />
        </AppPressable>
    );
}

export default IconButton;