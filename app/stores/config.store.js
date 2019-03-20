import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDNz105DPmsiaXxV6HtJIrANSy6AsgKpMI",
    authDomain: "game-of-life-bebfa.firebaseapp.com",
    databaseURL: "https://game-of-life-bebfa.firebaseio.com",
    projectId: "game-of-life-bebfa",
    storageBucket: "game-of-life-bebfa.appspot.com",
    messagingSenderId: "185267391398"
};

export default class ConfigStore {
    constructor() {
        firebase.initializeApp(config)
        this.splashTime = 1000
        this.splashImg = require('../../images/splash.jpg')
        this.loginBG = require('../../images/login.jpg')
    }
    get SplashImg() {
        return this.splashImg
    }
    get SplashTime() {
        return this.splashTime
    }
    get LoginBG() {
        return this.loginBG
    }
}