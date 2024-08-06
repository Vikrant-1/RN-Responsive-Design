import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FlexibleImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/photos/image-2.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    aspectRatio: 16 / 9, // Maintains a 16:9 aspect ratio
  },
});

export default FlexibleImage;
