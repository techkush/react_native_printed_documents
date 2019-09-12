import React,{ useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View style={styles.viewStyle}>
            <Text>Enter password: </Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    viewStyle: {
        margin: 15
    }
});

export default TextScreen;
