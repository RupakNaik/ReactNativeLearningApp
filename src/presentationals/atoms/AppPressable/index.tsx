import React from 'react';
import { Pressable, PressableProps, ViewStyle, StyleProp } from 'react-native';
import { styles } from './styles'

export interface AppPressableProps extends PressableProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    accessibilityLabel?: string;
}

const AppPressable: React.FC<AppPressableProps> = ({ children, style, accessibilityRole = 'button', hitSlop=6, android_ripple, ...rest }) => {
    return (

        <Pressable
            style={({ pressed }) => [
                styles.default,
                style,
                // simple pressed feedback (opacity) — override later if needed
                pressed ? styles.pressed : null,
            ]}
            accessibilityRole={accessibilityRole}
            hitSlop={hitSlop}
            android_ripple={android_ripple}
            {...rest}
        >
            {children}
        </Pressable>

    )
}

export default AppPressable;