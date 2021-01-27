import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen'

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Login" component={LoginScreen} />
    </MainStack.Navigator>
);