import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    default: {
        backgroundColor: "#abcdef",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        height: 56, // gives the header a consistent height

    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },
}
)