import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';

const NavStack = createStackNavigator({
    Splash: {
        screen: SplashScreen
    },
    Login: {
        screen: LoginScreen
    },
});

export default createAppContainer(NavStack);