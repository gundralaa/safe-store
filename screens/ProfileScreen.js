import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';
import Header from './components/Header';

class FeedbackScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        times: [
          {

          }
        ]
      }
    }
    render() {
      return(
        <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}>
              <Text style={styles.mainText}>Appointments</Text>
            </View>
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
      padding: 20,
      fontSize: 18,
      fontWeight: 'bold'
    },
    body: {
        flex: 10
    }
});

export default FeedbackScreen;

