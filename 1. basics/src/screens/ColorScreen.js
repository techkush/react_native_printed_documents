import React, { useState } from 'react';
import { View, Text, StyleSheet,  Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View style={ styles.viewStyle }>
            <Text>ColorScreen</Text>
            <Button title="Add a Color" 
                onPress={() => {
                    setColors([...colors, randomRgb()]);
                }}
            />
            {/* <View style={{ height: 100, width: 100, backgroundColor: 'rgb(0, 255, 0)' }}/> */}
            <FlatList 
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }}/>;
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
    {/* The grave accent ( ` ) is a diacritical mark used in many written languages. */}
};


const styles = StyleSheet.create({
    viewStyle: {
        padding: 15
    }
});

export default ColorScreen;