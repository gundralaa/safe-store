import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';
import MapView from 'react-native-maps';
import Header from './components/Header';
import { TextInput } from 'react-native-gesture-handler';

class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeText: '',
            immuneCheck: false,
        };
    }
    render() {
      return(
        <View style={styles.container}>
            <Header name='Signup'/>
            <View style={styles.body}>
                <Text style={styles.mainText}>Open Time</Text>
                <View style={{flex: 2}}>
                    <Text style={styles.time}>3:30</Text>
                </View>
                <View style={{flex: 9, flexDirection:'column', justifyContent: 'space-between', padding: 30}}>
                    <Text style={styles.headerText}>Chosen Time</Text>
                    <TextInput
                        style={styles.timeInput}
                        placeholder='4:30'
                        onChangeText={(text) => this.setState({timeText: text})}
                        defaultValue={this.state.timeText}
                    />
                    <Text style={styles.headerText}>Immunocompromised: {this.state.immuneCheck ? 'Yes' : 'No'}</Text>
                    <Button
                        onPress={() => this.setState((prevState) => ({immuneCheck: !prevState.immuneCheck}))}
                        title={''}
                    />
                    <TouchableOpacity
                        style={{backgroundColor: 'white', alignSelf: 'center'}}
                        onPress={() => this.props.navigation.navigate("Home")}>
                        <Text style={styles.headerText}>Submit</Text>
                    </TouchableOpacity>
                </View>
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
      fontWeight: 'bold',
      flex: 1
    },
    headerText: {
        padding: 20,
        fontSize: 16,
        fontWeight: 'bold',
        //flex: 1
    },
    body: {
        flex: 10,
        flexDirection: 'column'
    },
    time: { 
      fontSize: 40,
      fontWeight: 'bold',
      flex: 1,
      color: 'green',
      alignSelf: 'center'
    },
    timeInput: {
        padding: 20,
        fontSize: 18,
        backgroundColor: 'white'
        //flex: 1
    }

});

export default SignUpScreen;