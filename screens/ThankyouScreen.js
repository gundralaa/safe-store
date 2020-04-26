import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,  
  Slider
} from 'react-native';
import Header from './components/Header';

class ThankyouScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rate: 0,
      }
    }
    render() {
      return (
     <View style={{
    backgroundColor: '#4682B4',
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'}}>
<Text style={{fontSize: 27, fontWeight: 'bold', color: 'white'}}> Thank you for your feedback!</Text>
</View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    mainText: {
      flex: 7,
      fontSize: 27,
      fontWeight: 'bold',
     textAlignVertical: 'center',
    }
});

export default ThankyouScreen;