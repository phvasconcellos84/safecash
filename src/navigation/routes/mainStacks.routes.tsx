import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import common from '../../assets/commonStyles';
import {enumScreens} from '../../helpers/enum';

import Dashboard from '../pages/Dashboard';
import AddValue from '../pages/Dashboard/addValue';
import Config from '../pages/Config';
import Person from '../pages/Person';
import AddPerson from '../pages/Person/addPerson';

const MainStack = createNativeStackNavigator();

const config = {
    default: {
        screenOptions: {
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: 'white',
            },
            headerStyle: {
                backgroundColor: common.colors.primary,
            },
        },
    },
    dashboard: {drawerLabel: enumScreens.dashboard.title},
    addValue: {drawerLabel: enumScreens.addValue.title},
    config: {titdrawerLabelle: enumScreens.config.title},
    person: {drawerLabel: enumScreens.person.title},
    addPerson: {drawerLabel: enumScreens.addPerson.title},
};

export default () => (
    <MainStack.Navigator {...config.default}>
        <MainStack.Screen
            name={enumScreens.dashboard.name}
            component={Dashboard}
            options={{drawerLabel: enumScreens.dashboard.title}}
        />
        <MainStack.Screen
            name={enumScreens.addValue.name}
            component={AddValue}
            {...config.addValue}
        />
        <MainStack.Screen
            name={enumScreens.config.name}
            component={Config}
            {...config.config}
        />
        <MainStack.Screen
            name={enumScreens.person.name}
            component={Person}
            {...config.person}
        />
        <MainStack.Screen
            name={enumScreens.addPerson.name}
            component={AddPerson}
            {...config.addPerson}
        />
    </MainStack.Navigator>
);
