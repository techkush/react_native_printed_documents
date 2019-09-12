import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}
                imageScore={8} 
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}
                imageScore={9}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}
                imageScore={10}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        marginVertical: 30,
        marginHorizontal: 30
    }
});

export default ImageScreen;