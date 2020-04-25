import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from './components/Header';

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
    var alertColor = props.crowd > 2 ? 'darkred' : 'green';
    return (
        <View style={[styles.item]}>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.itemText}>{props.name}</Text>
                <Text style={{fontSize: 14, color: 'grey'}}>3309 Boston Harbor</Text>
            </View>
            <View style={[{backgroundColor: alertColor}, styles.itemCrowd]}>
            </View>
        </View>
    );
}

class HomeScreen extends React.Component {
    render() {
      return(
        <View style={styles.container}>
            <Header name='Home'/>
            <View style={styles.body}>
                <Text style={[styles.mainText]}>Stores</Text>
                <FlatList
                    data={MOCK}
                    renderItem={({ item }) => <Item name={item.store} crowd={item.crowd}/>}
                    keyExtractor={item => item.id}
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
      padding: 20,
      fontSize: 20,
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

export default HomeScreen;