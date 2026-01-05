import React from 'react';
import { StyleProp, ViewStyle, Modal, View } from 'react-native';
import { styles } from './styles';
import RadioOption from '../../molecules/RadioOption';
import AppText from '../../atoms/AppText';

export interface ViewToggleModalProps {
    style?: StyleProp<ViewStyle>;
    visible: boolean; // Controls modal visibility
    selectView: 'list' | 'grid'; // Current selected view type
    onSelectView: (view: 'list' | 'grid') => void; // Callback when selection changes
    onClose: () => void; // Callback to close modal
}

const VIEW_OPTIONS = [
    { value: 'list' as const, label: "List View" },
    { value: 'grid' as const, label: "Grid View" },
];

const ViewToggleModal: React.FC<ViewToggleModalProps> = ({ style, visible, selectView, onSelectView, onClose }) => {

    const handleSelect = (value: string | number) => {
        onSelectView(value as 'list' | 'grid');
        onClose();
    }
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={[styles.content, style]}>
                    <AppText style={styles.title}>Select View Type</AppText>
                    {VIEW_OPTIONS.map((option) => (
                        <RadioOption
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            selected={selectView === option.value}
                            onPress={handleSelect} />
                    ))}
                    {/* <RadioOption
                    value="list"
                    label='List View'
                    selected={selectView === 'list'}
                    onPress={(value) => {
                        onSelectView(value as 'list' | 'grid');
                        onClose();
                    }} />
                <RadioOption
                    value="grid"
                    label='Grid View'
                    selected={selectView === 'grid'}
                    onPress={(value) => {
                        onSelectView(value as 'list' | 'grid');
                        onClose();
                    }} /> */}
                </View>
            </View>
        </Modal>
    );
}

export default ViewToggleModal;