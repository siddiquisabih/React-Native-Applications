import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Dimensions, Text, View } from 'react-native';
import Camera from 'react-native-camera';

export default class CapturePicture extends Component {
  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (

        <Camera
          torchMode={Camera.constants.TorchMode.off}
          ref={(cam) => {
            console.log('cam', cam)
            this.camera = cam;
          }}

          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>capture</Text>
        </Camera>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('cameraApp', () => CapturePicture);