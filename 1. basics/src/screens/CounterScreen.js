import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    //dispatch = callMyReducer

    return (
        <View style={styles.viewStyle}>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: 1 })
            }} />
            <Button title="dicrease" onPress={() => {
                dispatch({ type: 'decrement', payload: 1 })
            }} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        padding: 15
    }
});

export default CounterScreen;