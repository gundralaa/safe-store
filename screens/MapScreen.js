import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import Header from './components/Header';

class MapScreen extends React.Component {
    render() {
      return(
        <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
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

export default MapScreen;