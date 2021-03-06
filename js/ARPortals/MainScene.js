'use strict';

import React from 'react';
import { styles } from '../components/Styles'
import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText
} from 'react-viro'

export default class MainScene extends React.Component {
  state = {
    loading: true
  }

  showLoader = () => {
    if (this.state.loading) {
      return (
        <>
          <ViroText
            text={'Loading...'}
            scale={[.5, .5, .5]}
            position={[1, 0, -1]}
            rotation={[0, -45, 0]}
            style={styles.ARLoadingText}
          />
          <ViroText
            text={'Loading...'}
            scale={[.5, .5, .5]}
            position={[0, 0, -2]}
            style={styles.ARLoadingText}
          />
          <ViroText
            text={'Loading...'}
            scale={[.5, .5, .5]}
            position={[-1, 0, -1]}
            rotation={[0, 45, 0]}
            style={styles.ARLoadingText}
          />
        </>
      )
    }
  }

  endLoad = () => {
    this.setState({ loading: false })
  }

  render() {
    return (
      <>
        <ViroARScene>
          <ViroAmbientLight color="#ffffff" intensity={200} />
          {this.showLoader()}
          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => { }}>
            <ViroPortal position={[1, 0, -1]} scale={[.5, .5, .5]}>
              <Viro3DObject
                source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[
                  require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                  require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                  require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')
                ]}
                rotation={[0, -45, 0]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image source={{ uri: this.props.arSceneNavigator.viroAppProps[2].url }} />
          </ViroPortalScene>
          <ViroText
            text={this.props.arSceneNavigator.viroAppProps[2].title}
            scale={[.5, .5, .5]}
            position={[1, -1, -1]}
            style={styles.ARText}
            rotation={[0, -45, 0]}
          />

          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => { }}>
            <ViroPortal position={[0, 0, -2]} scale={[.5, .5, .5]}>
              <Viro3DObject
                source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image
              onLoadEnd={this.endLoad}
              source={{ uri: this.props.arSceneNavigator.viroAppProps[1].url }}
            />
          </ViroPortalScene>
          <ViroText
            text={this.props.arSceneNavigator.viroAppProps[1].title}
            scale={[.5, .5, .5]}
            position={[0, -1, -2]}
            style={styles.ARText}
          />

          <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => { }}>
            <ViroPortal position={[-1, 0, -1]} scale={[.5, .5, .5]}>
              <Viro3DObject
                source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
                resources={[
                  require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                  require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                  require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')
                ]}
                rotation={[0, 45, 0]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image source={{ uri: this.props.arSceneNavigator.viroAppProps[0].url }} />
          </ViroPortalScene>
          <ViroText
            text={this.props.arSceneNavigator.viroAppProps[0].title}
            scale={[.5, .5, .5]}
            position={[-1, -1, -1]}
            style={styles.ARText}
            rotation={[0, 45, 0]}
          />
        </ViroARScene>
      </>
    )
  }
}

module.exports = MainScene;