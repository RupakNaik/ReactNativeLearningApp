import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import ScreenLayout from '../../presentationals/organisms/ScreenLayout';
import { styles } from './styles';
import AppPressable from '../../presentationals/atoms/AppPressable';
import AppText from '../../presentationals/atoms/AppText';

export interface HomeTemplateProps extends ViewProps {
    style?: StyleProp<ViewStyle>,
    children?: React.ReactNode,
    onNextPress?:()=> void;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ style, children, onNextPress, ...rest }) => {
    return (
        <ScreenLayout
            title="Home"
            style={[styles.default, style]}
            {...rest}>
                <AppPressable 
                    onPress={onNextPress}
                    style={styles.button}>
                    <AppText style={styles.buttonLabel}>Go to Details</AppText>
                </AppPressable>
            {children}
        </ScreenLayout>
    );
}

export default HomeTemplate;