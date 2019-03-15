import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';

const NavStack = createStackNavigator({
    Splash: {
        screen: SplashScreen
    },
});

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;