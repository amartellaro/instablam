import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { inject } from 'mobx-react';
import Confetti from 'react-native-confetti';

@inject("stores")
export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {stores, navigation} = this.props;
        setTimeout(() => {
            navigation.navigate("Login")
        }, stores.config.splashTime)
        if(this._confettiView) {
            this._confettiView.startConfetti();
        }
    }
    render() {
        const { stores } = this.props
        return (
            <View style={{flex: 1}}>
                <Image style={{flex: 1, width: null, height: null}} source={stores.config.SplashImg}/>
                <Confetti ref={(node) => this._confettiView = node}/>
            </View>
        )
    }
}