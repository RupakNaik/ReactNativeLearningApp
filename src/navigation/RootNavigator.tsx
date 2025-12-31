
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import type { RootStackParamList } from "./types";
import HomeScreen from "../containers/HomeScreen";
import DetailsScreen from "../containers/DetailsScreen";

/**
 * Creates a typed stack navigator using route names from navigation/types.ts
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    // This boolean controls if "Details" exists in the stack at runtime
    const [detailsEnabled, setDetailsEnabled] = React.useState(true);

    return (
        // SafeAreaProvider wraps root so screens respect device notches
        <SafeAreaProvider>
            {/* NavigationContainer is the top-level provider enabling navigation */}
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home">
                        {() => (
                            <HomeScreen
                                detailsEnabled={detailsEnabled}
                                // Toggle instead of forcing false
                                toggleDetails={() => setDetailsEnabled(prev => !prev)}
                            />
                        )}
                    </Stack.Screen>

                    {/* Details only appears when detailsEnabled === true */}
                    {detailsEnabled && (
                        <Stack.Screen name="Details" component={DetailsScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}