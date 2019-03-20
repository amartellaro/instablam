import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';
import MatchScreen from './screens/match.screen';

const NavStack = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        header: null
    },
    Login: {
        screen: LoginScreen,
        header: null
    },
    Match: {
        screen: MatchScreen,
        headerMode: 'screen',
        headerTitle: 'Matches',
        drawerLabel: 'Matches'
    }
});

export default createAppContainer(NavStack);