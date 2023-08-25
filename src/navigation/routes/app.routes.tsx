import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enumScreens } from "../../helpers/enum";

import Dashboard from "../pages/Dashboard";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={enumScreens.dashboard.name} component={Dashboard} />
        </Stack.Navigator>
    );
}

export default AppRoutes;