import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 24 },
        { name: 'Friend #2', age: 21 },
        { name: 'Friend #3', age: 29 },
        { name: 'Friend #4', age: 21 },
        { name: 'Friend #5', age: 27 },
        { name: 'Friend #6', age: 23 },
        { name: 'Friend #7', age: 23 },
        { name: 'Friend #8', age: 28 },
        { name: 'Friend #9', age: 20 },
    ];
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={true}
            keyExtractor = {friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={ styles.textStyle}>
                        Name: {item.name} - Age: {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 20,
        marginVertical: 20
    }
});

export default ListScreen;