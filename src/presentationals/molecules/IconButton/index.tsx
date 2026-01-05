import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import * as LucideIcons from 'lucide-react-native';
// import { LucideIcon } from 'lucide-react-native';
import {IconName} from '../../types';
import AppPressable from '../../atoms/AppPressable';
import { styles } from './styles';
import { colors, typography } from '../../../theme';

// lucide-react-native exports many things. 
// We only want the icon components, not the utility functions or types.
// 1) keyof typeof LucideIcons Result: "Menu" | "Settings" | "Search" | "createLucideIcon" | "LucideIcon" | ...
// This gives us ALL the names of things exported from Lucide (as a union of strings).
// 2) [K in keyof typeof LucideIcons] = This is called a Mapped Type. It loops through each key one by one. Think of it like a for loop:
// 3) (typeof LucideIcons)[K] = This gets the actual value/type for each key.
/**
 * (typeof LucideIcons)["Menu"]      // → The Menu icon component type
 * (typeof LucideIcons)["Settings"]  // → The Settings icon component type
 * (typeof LucideIcons)["createLucideIcon"]  // → A function type (not icon!)
 */
// 4) extends LucideIcon ? K : never = This is a Conditional Type (like an if-else):
// Pseudo-code:
// if (value is a LucideIcon) {
//     keep the key name (K)
// } else {
//     discard it (never)
// }
// 5) After the mapping, we get an object type like:
// {
//     Menu: "Menu",           // ✅ kept
//     Settings: "Settings",   // ✅ kept
//     Search: "Search",       // ✅ kept
//     createLucideIcon: never, // ❌ filtered out
//     LucideIcon: never,       // ❌ filtered out
// }
// 6) [keyof typeof LucideIcons] at the end.  
// type IconName = "Menu" | "Settings" | "Search" | ... // Only valid icon names!

// This helper type extracts all valid icon names from Lucide
// type IconName = {
//     [K in keyof typeof LucideIcons]:(typeof LucideIcons)[K] extends LucideIcon ? K : never;
// }[keyof typeof LucideIcons];

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
    const IconComponent = LucideIcons[iconName];
    //safety check
    if (!IconComponent || typeof IconComponent !== 'function') {
        return null;
    }

    return (
    <AppPressable
        onPress={onPress}
        style={[style, styles.default]}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}>
        <IconComponent size={size} color={color} strokeWidth={strokeWidth} />
    </AppPressable>);
}

export default IconButton;

// Look at this line in your code:
// const IconComponent = LucideIcons[iconName];

// This is where the magic happens!
// // 1. User passes iconName prop
// <IconButton iconName="Menu" onPress={() => {}} />

// // 2. Inside IconButton, we destructure it
// const IconButton = ({ iconName, ... }) => {
    
//     // 3. We use iconName to look up the actual icon component
//     const IconComponent = LucideIcons[iconName];
//     // This is equivalent to: LucideIcons["Menu"]
//     // Which gives us: the Menu icon component
    
//     // 4. We render the component dynamically
//     return (
//         <AppPressable>
//             <IconComponent size={size} color={color} />
//             {/* This renders the actual Menu icon! */}
//         </AppPressable>
//     );
// }