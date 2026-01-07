import React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';

import DetailsTemplate from '../../presentationals/templates/DetailsTemplate';
import { styles } from './styles';
import { useDetail } from './hooks';

export interface DetailsScreenProps extends ViewProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ children, style, ...rest }) => {

    const {weatherItem, title, onBack} = useDetail();

    return (
        <DetailsTemplate
            style={[styles.default, style]}
            title={title}
            onBack={onBack}
            {...rest}>
            {children}
        </DetailsTemplate>
    )
}
export default DetailsScreen;