import * as React from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';
import { Constants, SMS } from 'expo';

export default class App extends React.Component {

  // gives us an alert if SMS is available to use
  onPress = async () => {
    if (await SMS.isAvailableAsync()) {
      alert("Beast Mode!")
    }
    
  // numbers can be added to the array. Duplicate numbers will be ignored
  // Message can be easily changed
    const status = await SMS.sendSMSAsync(
      ['18082277864', '12065038598'],
      'The Seattle Seahawks Are Great!'
      );
      console.log(status);
      //console.log tells us if our message was sent successfully 
  };

  // Uses an onPress method to call the asynchronous function await SMS.sendSMSAsync
  render() {
    return (
      <ImageBackground source={require('./assets/hawks.jpg')} style={styles.container}>
      <View style={styles.inner}>
      <Button onPress={this.onPress} title="Tell Everyone How Great the Seattle Seahawks Are!?"/></View>
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  inner: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(255,255,255, 0)'
  }
});