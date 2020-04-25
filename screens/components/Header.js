import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function Header(props) {
    return (
        <View style={styles.headerBox}>
            <Text style={styles.mainText}>AppName</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBox: {
        flex: 1,
        backgroundColor: 'steelblue',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Header;