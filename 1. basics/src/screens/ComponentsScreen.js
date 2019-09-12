import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = (props) => {
    console.log(props);
    const greeting = <Text>Hello World!</Text>
    return (
        <View style={ styles.viewProp }>
            <Text style={styles.textStyle} >This is the Components Screen.</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    viewProp: {
        padding: 15  
    }
});

export default ComponentsScreen;