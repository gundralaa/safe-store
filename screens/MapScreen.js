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
import Places from './Places';

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
        stores: []
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
                <MapView
                    style={styles.map}
                    region={this.state.initialPosition}>
                    {this.state.stores.map(store => (
                      <MapView.Marker coordinate={{latitude: parseFloat(store.latitude), 
                                                    longitude: parseFloat(store.longitude)}}
                                      title={store.name}
                                      onCalloutPress={() => this.props.navigation.navigate('SignUp', {
                                        name: store.name,
                                        id: store.key,
                                        time: store.besttime
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