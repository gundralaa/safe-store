import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,  
  Slider,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from './components/Header';
import FeedbackSubmitScreen from './FeedbackSubmitScreen';
import ThankyouScreen from './ThankyouScreen';
import { createStackNavigator } from '@react-navigation/stack';
//import { Slider } from 'react-native-community/slider';


const MOCK = [
    {
        id: '1',
        store: 'Safeway',
        crowd: 3
    },
    {
        id: '2',
        store: 'Walmart',
        crowd: 1
    },
    {
        id: '3',
        store: 'Ralphs',
        crowd: 5
    },
    {
        id: '4',
        store: 'Ralphs',
        crowd: 1
    },
    {
        id: '5',
        store: 'Ralphs',
        crowd: 3
    },
    {
        id: '6',
        store: 'Ralphs',
        crowd: 2
    },
    {
        id: '7',
        store: 'Ralphs',
        crowd: 1
    },
    {
        id: '8',
        store: 'Ralphs',
        crowd: 2
    },
]

function Item(props) {
    return (
        <TouchableOpacity style={[styles.item]}
                        onPress={props.onPress}>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.itemText}>{props.name}</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>3309 Boston Harbor</Text>
            </View>
        </TouchableOpacity>
    );
}

class FeedbackScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rate: 0,
      }
    }
    render() {
      return (
          <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}>
                <Text style={[styles.mainText]}>Please select a store you recently visited:</Text>
                <FlatList
                    data={MOCK}
                    renderItem={({ item }) => <Item name={item.store} 
                    crowd={item.crowd} 
                    id={item.id}
                    onPress={() => this.props.navigation.navigate('FeedbackSubmit')}/>}
                    keyExtractor={item => item.id}
                />
    </View>
 </View>
    );
    }
}

const Stack2 = createStackNavigator();

class StackHolder2 extends React.Component {
    render() {
        return(
            <Stack2.Navigator
                headerMode='none'>
                <Stack2.Screen name='Feedback' component={FeedbackScreen}/>
                <Stack2.Screen name='FeedbackSubmit' component={FeedbackSubmitScreen}/>
                <Stack2.Screen name='ThankYou' component={ThankyouScreen}/>
            </Stack2.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    mainText: {
      padding: 45,
      fontSize: 23,
      fontWeight: 'bold'
    },
    body: {
        flex: 9,
        padding: 20
    },
    regularText: {
        padding: 20,
        fontSize: 23,
    },
    thumb: {
        width: 50,
        height: 80,
        backgroundColor: '#FF8C00',
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,

    },
    track:{
        height: 80,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
    }
});

export default StackHolder2;

