import React from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Text
} from "react-native";
import commonStyles from "../assets/commonStyles";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={60} color={commonStyles.colors.primary} />
            <Text style={styles.activityText}>Carregando...</Text>
        </View >
    );
}

export { Loading }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        alignItems: 'center'
    },
    activityText: {
        fontSize: 16,
        color: commonStyles.colors.primary,
    }
});