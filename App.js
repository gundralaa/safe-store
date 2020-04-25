/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home'
                } else if (route.name === 'Map') {
                  iconName = 'map'
                } else if (route.name === 'Profile') {
                  iconName = 'user'
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'skyblue',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainText: {
    padding: 30,
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default App;


