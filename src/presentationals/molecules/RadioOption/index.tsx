import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import AppText from '../../atoms/AppText';
import AppPressable from '../../atoms/AppPressable';
import RadioButton from '../../atoms/RadioButton';
import { styles } from './styles';

export interface RadioOptionProps {
    value: string | number; // what value the option represents
    label: string; //display text
    selected: boolean; // is this option currently selested?
    onPress: (value: string | number) => void;//callback when pressed
    disabled?: boolean;//optional: disable interaction
    style?: StyleProp<ViewStyle>//optional: container style override
}

const RadioOption: React.FC<RadioOptionProps> = ({ value, label, selected, onPress, disabled, style }) => {
    return (
        <AppPressable
            onPress={()=>{onPress(value)}}
            accessibilityRole="radio"
            accessibilityState={{ checked: selected, disabled }}
            disabled={disabled}
            accessibilityLabel={label}
            style={[styles.default, style, disabled && styles.disabled]}>
            <RadioButton selected={selected} size={24}/>
            <AppText style={styles.label}>{label}</AppText>
        </AppPressable>
    );
}

export default RadioOption;