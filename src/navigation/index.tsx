import React from "react";
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle='light-content'
                backgroundColor={'transparent'}
                translucent={true}
            />
            <Routes />
        </NavigationContainer>
    );
}

export default AppNavigation;
