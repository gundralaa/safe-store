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
import Places from './Places';

class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timeText: '4:30PM',
            immuneCheck: false,
            name: this.props.route.params.name,
            id: this.props.route.params.id,
            time: this.props.route.params.time,
        };
    }
    onSubmit() {
        var places = new Places();
        var url = places.getSignUpUrl(this.state.id, this.state.immuneCheck, this.state.timeText);
        fetch(url)
        .then((response) => {
            console.log(response);
            this.props.navigation.navigate("Home");
        })
        .catch((error) => {
            console.error(error);
        });
    }
    render() {
      return(
        <View style={styles.container}>
            <Header name='Signup'/>
            <View style={styles.body}>
                <Text style={styles.mainText}>Best Time {this.state.name}</Text>
                <View style={{flex: 2}}>
                    <Text style={styles.time}>{this.state.time}</Text>
                </View>
                <View style={{flex: 9, flexDirection:'column', justifyContent: 'space-between', padding: 30}}>
                    <Text style={styles.headerText}>Chosen Time</Text>
                    <TextInput
                        style={styles.timeInput}
                        placeholder='4:30 PM'
                        onChangeText={(text) => this.setState({timeText: text})}
                        defaultValue={this.state.timeText}
                    />
                    <Text style={styles.headerText}>Health Risk: {this.state.immuneCheck ? 'Yes' : 'No'}</Text>
                    <TouchableOpacity
                        style={{backgroundColor: 'white', alignSelf: 'center'}}
                        onPress={() => this.setState((prevState) => ({immuneCheck: !prevState.immuneCheck}))}>
                            <Text style={styles.headerText}>Health Risk?</Text>
                        </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor: 'white', alignSelf: 'center'}}
                        onPress={() => this.onSubmit()}>
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