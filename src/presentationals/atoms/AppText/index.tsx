import React from "react";
import { Text, TextProps, StyleProp, TextStyle } from "react-native";
import { styles } from "./styles";

//children is optional (?) and can be any valid React content: string, number, elements, fragments, arrays… (React.ReactNode covers all these).
export interface AppTextProps extends TextProps {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

//React.FC<AppTextProps> tells TypeScript:
//This function component accepts props matching AppTextProps.
//...rest collects all other props (like numberOfLines) and spreads them onto the inner <Text>.
const AppText: React.FC<AppTextProps> = ({ children, style, ...rest }) => {
    return (
        <Text
            style={[styles.default, style]}
            {...rest}>
            {children}
        </Text>
    )
}
export default AppText;