import React, { Component } from 'react';
import {
    Container,
    Content
} from 'native-base';
import {
    View,
    ImageBackground
} from 'react-native';
import { inject } from 'mobx-react';
import Login from '../components/login.component';

@inject("stores")
export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {stores} = this.props
        return (
            <Container>
                <View>
                    <Content scrollEnabled={false}>
                        <ImageBackground source={stores.config.loginBG} style={{width: '100%', height: '100%'}}>
                            <View>
                                <Login {...this.props}/>
                            </View>
                        </ImageBackground>
                    </Content>
                </View>
            </Container>
        )
    }
}