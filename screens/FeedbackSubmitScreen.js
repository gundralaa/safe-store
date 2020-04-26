import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Header from './components/Header';


class FeedbackSubmit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rate: 0,
      }
    }
    render() {
      return (
      <View style={styles.container}>
           <Header name='How crowded was the store when you arrived?'/>
        <Text style={styles.mainText}>
          How crowded was the store when you arrived?
        </Text>
          <Text style={styles.regularText}>
          Rate: {this.state.rate}
        </Text>
        <View style={styles.body}>
        <Slider
          style={{ width: 415,
            justifyContent: 'center', 
            alignItems: 'center'
          }}
          minimumValue={0}
          maximumValue={10}
          onValueChange={(rate) => this.setState({rate: Math.round(rate)})}
          thumbTintColor='white'
          maximumTrackTintColor='grey' 
          minimumTrackTintColor='darkorange' />
               <TouchableOpacity
                        style={{backgroundColor: 'white', alignSelf: 'center'}}
                        onPress={() => this.props.navigation.navigate("ThankYou")}>
                        <Text style={styles.headerText}>Submit</Text>
                </TouchableOpacity>
    </View>
    </View>
   
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    mainText: {
        padding: 60,
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    body: {
        flex: 6.4
    },
    regularText: {
        padding: 10,
        fontSize: 23,
    },
    thumb: {
        width: 50,
        height: 80,
        backgroundColor: '#FF8C00',
        color: 'black',
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,

    },
    track:{
        height: 80,
        color: 'black',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    headerText: {
        padding: 20,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default FeedbackSubmit;