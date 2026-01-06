import React from 'react';
import { ViewStyle, StyleProp, View, ViewProps } from 'react-native';
import { styles } from './styles';
import { colors, typography } from '../../../theme'

export interface RadioButtonProps extends ViewProps {
    selected: boolean;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    style,
    selected,
    size = typography.fontSizes.xl,
    ...rest
}) => {
    const dotSize = size - 8; // inner dot
    const activeColor = colors.primary;
    const inactiveBorder = colors.border;

    return (
        <View
            style={[
                style,
                styles.default,
                { width: size, height: size, borderRadius: size / 2, borderWidth: 2, borderColor: selected ? activeColor : inactiveBorder }
            ]}
            {...rest}>
            {selected && (
                <View
                    style={{
                        width: dotSize,
                        height: dotSize,
                        borderRadius: dotSize / 2,
                        backgroundColor: activeColor,
                    }}
                />
            )}
        </View>
    )
}
export default RadioButton;