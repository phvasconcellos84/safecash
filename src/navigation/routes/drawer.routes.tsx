import {createDrawerNavigator} from '@react-navigation/drawer';
import {enumScreens} from '../../helpers/enum';
import common from '../../assets/commonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../pages/Dashboard';
import Config from '../pages/Config';
import Person from '../pages/Person';
import CustomDrawer from '../../components/CustomDrawer';
import commonStyles from '../../assets/commonStyles';

const Drawer = createDrawerNavigator();

const config = {
    default: {
        screenOptions: {
            headerTitleAlign: 'center',
            headerTintColor: commonStyles.colors.secundary,
            headerStyle: {
                backgroundColor: common.colors.primary,
            },
            drawerLabelStyle: {
                marginLeft: -20,
            },
            drawerActiveBackgroundColor: commonStyles.colors.primary,
            drawerActiveTintColor: commonStyles.colors.secundary,
        },
    },
    dashboard: {
        title: enumScreens.dashboard.title,
        drawerIcon: ({color}) => (
            <Icon name="home-outline" size={22} color={color} />
        ),
    },
    config: {
        title: enumScreens.config.title,
        drawerIcon: ({color}) => (
            <Icon name="cog-outline" size={22} color={color} />
        ),
    },
    person: {
        title: enumScreens.person.title,
        drawerIcon: ({color}) => (
            <Icon name="account-outline" size={22} color={color} />
        ),
    },
};

const MainDrawer = () => {
    return (
        <Drawer.Navigator
            {...config.default}
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen
                name={enumScreens.dashboard.name}
                component={Dashboard}
                options={{...config.dashboard}}
            />
            <Drawer.Screen
                name={enumScreens.config.name}
                component={Config}
                options={{...config.config}}
            />
            <Drawer.Screen
                name={enumScreens.person.name}
                component={Person}
                options={{...config.person}}
            />
        </Drawer.Navigator>
    );
};

export default MainDrawer;
