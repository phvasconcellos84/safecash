import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import common from '../../assets/commonStyles';

import LoginScreen from '../pages/LoginScreen'

const MainStack = createStackNavigator();

const config = {
    default: {
        screenOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'white'
            },
            headerStyle: {
                backgroundColor: common.colors.primary
            }
        }
    },
    login: {
        options: {
            headerShown: false,
        }
    }
}

export default () => (
    <MainStack.Navigator {...config.default}>
        <MainStack.Screen name="Login" component={LoginScreen} {...config.login} />
    </MainStack.Navigator>
);