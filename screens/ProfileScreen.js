import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from './components/Header';

class ProfileScreen extends React.Component {
    render() {
      return(
        <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}></View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    mainText: {
      padding: 30,
      fontSize: 16,
      fontWeight: 'bold'
    },
    body: {
        flex: 10
    }
});

export default ProfileScreen;

