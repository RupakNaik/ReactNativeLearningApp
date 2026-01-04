import { StyleSheet } from 'react-native';
import {spacing,typography} from '../../../theme';

export const styles = StyleSheet.create({
    default: {
        flexDirection:'row',
        alignItems:'center',
        gap:spacing.sm,
        paddingVertical: spacing.sm
    },
    label:{
        fontSize: typography.fontSizes.md,
        flex:1
    },
    disabled:{
        opacity:0.5
    }
});