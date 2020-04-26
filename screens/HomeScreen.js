import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from './components/Header';
import SignUpScreen from './SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Places from './Places';
import Geolocation from '@react-native-community/geolocation';

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
    var alertColor = 1 > 2 ? 'darkred' : 'green';
    return (
        <TouchableOpacity style={[styles.item]}
                        onPress={props.onPress}>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.itemText}>{props.name}</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>{props.address}</Text>
            </View>
        </TouchableOpacity>
    );
}

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            initialPosition: {
                latitude: 47.78825,
                longitude: -122.4324,
            },
            stores: [
            ],
            url: '',
            zipCode: 98506,
        };
    }
    async setLocation() {
        Geolocation.getCurrentPosition((position) => {
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)
  
          var initialRegion = {
            latitude: lat,
            longitude: long
          }
  
          //console.log(initialRegion)
  
          this.setState({initialPosition: initialRegion})
          var place = new Places();
          var url = place.getShopsUrl(this.state.initialPosition);
          this.getShops(url);
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
      }
    componentDidMount() {
        this.setLocation();
    }
    getShops(url) {
        return fetch(url)
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((json) => {
                console.log(json)
                this.setState({stores: json});
                return json
            })
            .catch((error) => {
                console.error(error);
        });
    }
    render() {
      return(
        <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}>
                <Text style={[styles.mainText]}>Stores</Text>
                <FlatList
                    data={this.state.stores}
                    renderItem={({ item }) => <Item name={item.name}
                    address={item.physical_address} 
                    onPress={() => this.props.navigation.navigate("SignUp", 
                        {id: item.id, 
                        name: item.name, 
                        time: item.besttime})}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
      )
    }
}

const Stack = createStackNavigator();

class StackHolder extends React.Component {
    render() {
        return(
            <Stack.Navigator
                headerMode='none'>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
            </Stack.Navigator>
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
      padding: 20,
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
    body: {
        flex: 10
    },
    item: {
        flexDirection: 'row',
        //alignItems: 'flex-start',
        justifyContent: 'space-between',
        //borderWidth: 1,
        padding: 20,
        margin: 10,
        backgroundColor: 'white',
        //borderRadius: 10,
    },
    itemText: {
        //justifyContent: 'center',
        fontSize: 16,
    },
    itemCrowd: {
        alignSelf: 'flex-end',
        height: 50,
        width: 50
    },
    dropShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default StackHolder;
