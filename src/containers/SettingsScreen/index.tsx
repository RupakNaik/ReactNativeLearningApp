import React, { useEffect, useRef, useState } from 'react';
import {Text, View} from 'react-native';

interface SettingsScreenProps {
    title?: string;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({title}) => {

    const [name, setName] = useState<string>('');
    var apiResponse = useRef<[] | null>([]);
    
    useEffect(() => {
        setName("Vivek")
        return () => {
            apiResponse.current = null;
        }
    }, []);

    useEffect(() => {
        setName("Rupak")
        handleBackHandler();
    }, [apiResponse]);

    const handleBackHandler = () => {
        return true;
    }

    return (
        <View>
            <Text>{title}: {apiResponse?.current} {'->'} {name}</Text>
        </View>
    );
}

export default SettingsScreen;