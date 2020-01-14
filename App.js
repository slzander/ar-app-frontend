import React, { Component } from 'react'
import Login from './js/screens/Login'
import LoginForm from './js/screens/LoginForm'
import SignUp from './js/screens/SignUp'
import Dashboard from './js/screens/Dashboard'
import ARScreen from './js/screens/ARScreen'
import MainScene from './js/ARPortals/MainScene'
import Profile from './js/screens/Profile'
import Gallery from './js/screens/Gallery'
import { styles } from './js/components/Styles'
import Footer from './js/components/Footer'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

const InitialARScene = require('./js/ARPortals/MainScene.js');
const baseURL = 'https://ar-travel-app.herokuapp.com/'

export default class ViroSample extends Component {
  state = {
    screen: '',
    images: []
  }

  componentDidMount(){
    fetch(`${baseURL}images`)
        .then(response => response.json())
        .then(images => this.setState({ images }))
  }

  getLoginFormScreen = () => {
    return (
      <LoginForm
       changeScreen={this.changeScreen}
      />
    )
  }

  getDashboardScreen = () => {
    return (
      <Dashboard
       changeScreen={this.changeScreen}
      />
    )
  }
    
  getARScreen = () => {
    return (
      <View style={styles.ARView}>
        <ViroARSceneNavigator 
          style={styles.ARScene}
          initialScene={{scene: InitialARScene}}
       />
        <Footer
          changeScreen={this.changeScreen}
        />
      </View>
    )
  }
    
  getProfileScreen = () => {
    return (
      <Profile
       changeScreen={this.changeScreen}
      />
    )
  }

  getGalleryScreen = () => {
    return (
      <Gallery
       changeScreen={this.changeScreen}
       images={this.state.images}
      />
    )
  }

  changeScreen = (screen) => {
    this.setState({ screen })
  }

  getScreen = () => {
    switch (this.state.screen){
      case 'loginForm':
        return this.getLoginFormScreen()
      case 'dashboard':
        return this.getDashboardScreen()
      case 'AR':
        return this.getARScreen()
      case 'profile':
        return this.getProfileScreen()
      case 'gallery':
        return this.getGalleryScreen()
      default:
        return this.getLoginFormScreen()
    }
  }

  render() {
    return (
      <>
        {this.getScreen()}
      </>
    )
  }
}

module.exports = ViroSample