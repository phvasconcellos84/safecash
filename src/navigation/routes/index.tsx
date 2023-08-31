import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enumScreens} from '../../helpers/enum';
import Preload from '../pages/PreLoad';
import Auth from '../pages/Auth';
import MainDrawer from './drawer.routes';

const Stack = createNativeStackNavigator();

const config = {
    options: {
        headerShown: false,
    },
};

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={enumScreens.preload.name}
                component={Preload}
                {...config}
            />
            <Stack.Screen
                name={enumScreens.auth.name}
                component={Auth}
                {...config}
            />
            <Stack.Screen name="main" component={MainDrawer} {...config} />
        </Stack.Navigator>
    );
};

export default Routes;
