import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enumScreens } from "../../helpers/enum";
import commonStyles from "../../assets/commonStyles";

import Signin from "../pages/Signin";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    const config = {
        default: {
            screenOptions: {
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white',
                },
                headerStyle: {
                    backgroundColor: commonStyles.colors.primary,
                },
            }
        },
        signin: {
            options: {
                headerShown: false,
                headerStyle: {
                    avigationBarColor: 'black',
                    navigationBarHidden: false
                }
            }
        },
    }

    return (
        <Stack.Navigator
            {...config.default} 
        >
            <Stack.Screen name={enumScreens.signin.name} component={Signin} {...config.signin} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;