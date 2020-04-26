import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import Header from './components/Header';
import SignUpScreen from './SignUpScreen'
import Geolocation from '@react-native-community/geolocation';
import { createStackNavigator } from '@react-navigation/stack';

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

class MapScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initialPosition: {
          latitude: 47.78825,
          longitude: -122.4324,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        stores: [
          {
            key: 0,
            name: 'Ralphs',
            latLng: {
              latitude: 47.07898443,
              longitude: -122.89892559,
            }
          },
          {
            key: 1,
            name: 'Safeway',
            latLng: {
              latitude: 47.075,
              longitude: -122.89,
            }
          }
        ]
      }
    }
    async setLocation() {
      Geolocation.getCurrentPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }

        console.log(initialRegion)

        this.setState({initialPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    }
    componentDidMount() {
      this.setLocation();
    }
    render() {
      return(
        <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}>
                <MapView
                    style={styles.map}
                    region={this.state.initialPosition}>
                    {this.state.stores.map(store => (
                      <MapView.Marker coordinate={store.latLng}
                                      title={store.name}
                                      onCalloutPress={() => this.props.navigation.navigate('SignUp', {
                                        name: store.name,
                                        id: store.key
                                      })}/>
                    ))}
                </MapView>
            </View>
        </View>
      )
    }
}

const Stack = createStackNavigator();

class MapStackHolder extends React.Component {
    render() {
        return(
            <Stack.Navigator
                headerMode='none'>
                <Stack.Screen name='Map' component={MapScreen}/>
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
      padding: 30,
      fontSize: 16,
      fontWeight: 'bold'
    },
    body: {
        flex: 10
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapStackHolder;