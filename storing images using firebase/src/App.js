import React, { Component } from 'react'
import { Text, Container, Button } from 'native-base'
import { Image } from "react-native"
import { showImagePicker } from "react-native-image-picker"
import * as firebase from "firebase"
import RNFetchBlob from "react-native-fetch-blob"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
  authDomain: "bloodbank-876e1.firebaseapp.com",
  databaseURL: "https://bloodbank-876e1.firebaseio.com",
  projectId: "bloodbank-876e1",
  storageBucket: "bloodbank-876e1.appspot.com",
  messagingSenderId: "560849097238"
};
firebase.initializeApp(config)

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

class App extends Component {

  constructor() {
    super()
    this.state = {
      avatarSource: '',
      imagePath: "",
      imageHeight: "",
      imageWidth: "",
      picurl : ""




    }
  }

  image() {
    var options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }


    showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(response.uri)
        console.log(response.height)
        console.log(response.width)
        this.setState({
          imagePath: response.uri,
          imageHeight: response.height,
          imageWidth: response.width,
        })
      }
    });


  }





  
   uploadImage  (uri, imageName, mime = 'image/jpg') {
    return new Promise((resolve, reject) => {
      const uploadUri =  this.state.imagePath
        let uploadBlob = null
        const imageRef = firebase.storage().ref('posts').child("123")
        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
        })
        // .then(() => {
        //   uploadBlob.close()
        //   return imageRef.getDownloadURL()
        // })
        .then((url) => {
          console.log(url)
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }


downloadAndShow(){

const storage = firebase.storage().ref("posts").child("imageName")
.getDownloadURL()
.then((url)=>{
console.log(url)
this.setState({picurl : url})
})



}




  render() {
    return (
      <Container>



        <Button onPress={this.image.bind(this)}>

          <Text>click</Text>

        </Button>
        
        
        
        <Button onPress={this.uploadImage.bind(this)}>

          <Text>upload</Text>

        </Button>
      
      
        <Button onPress={this.downloadAndShow.bind(this)}>

          <Text>Download</Text>

        </Button>

        <Image  source={{uri : `${this.state.picurl}`}} 
        style={{resizeMethod : "auto" , width : 200 , height : 200}}
        />
      
      </Container>
    )
  }
}
export default App