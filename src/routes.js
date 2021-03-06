import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
        },
        {
            defaultNavigationOptions: {
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFFF',
            },
        }
    )
);
export default routes;
