import React from 'react';
import { Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginBottom: 10,
        maxHeight: height / 2, // Adjust the maximum height as needed
    },
});

const FlexibleImages = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/photos/image-4.jpg')}
                style={{ width: '100%', height: undefined, aspectRatio: 1.5 }}
            />
        </ScrollView>
    );
};


export default FlexibleImages;